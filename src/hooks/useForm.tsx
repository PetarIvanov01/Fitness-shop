import { useCallback, useEffect, useRef, useState } from 'react';

type ErrorType = {
    isVisible: boolean;
    requestErr: string | null;
};

type AdditionalErrors<T> = Record<keyof T, string | null>;
type ExtendedErrorType<T> = ErrorType & AdditionalErrors<T>;

export default function useForm<
    T extends {},
    A extends (values: T) => Promise<void>,
>(
    initialState: T,
    onSubmit: A,
    validation?: (key: keyof T, value: string) => string | null
) {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState<ExtendedErrorType<T>>({
        isVisible: true,
        requestErr: null,
        ...Object.keys(initialState).reduce((acc, key) => {
            acc[key as keyof T] = null;
            return acc;
        }, {} as AdditionalErrors<T>),
    });

    const isTriggeredErrorOnChange = useRef(false);

    const handleChangeValues = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name as keyof T;

            if (isTriggeredErrorOnChange.current === false) {
                setError((prevState) => ({
                    ...prevState,
                    [key]: null,
                    isVisible: false,
                    requestErr: null,
                }));
            }

            setValues((prev) => ({
                ...prev,
                [key]: e.target.value,
            }));

            isTriggeredErrorOnChange.current = true;
        },
        []
    );

    const handleSubmitForm = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                const initialKeys = Object.keys(initialState);

                const hasErrorField = initialKeys.some((e) => {
                    if (e in error === false) {
                        return false;
                    }

                    const key = e as keyof typeof error;
                    return error[key] !== null;
                });

                if (error.requestErr === null && hasErrorField === false) {
                    isTriggeredErrorOnChange.current = false;
                    await onSubmit(values);
                }
            } catch (error: any) {
                if (error.message) {
                    setError((state) => ({
                        ...state,
                        requestErr: error.message,
                    }));
                }
            }
        },
        [onSubmit, values, error, initialState]
    );

    const ref = useRef({
        getValueFromClosure: (key: keyof T) => {
            return values[key];
        },
    });

    useEffect(() => {
        ref.current.getValueFromClosure = (key: keyof T) => {
            return values[key];
        };
    });

    const handleOnBlurValidation = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name as keyof T;
            isTriggeredErrorOnChange.current = false;

            if (typeof validation === 'function') {
                const value = ref.current.getValueFromClosure(key);

                const errorMessage = validation(key, value as string);

                setError((prevState) => ({
                    ...prevState,
                    [key]: errorMessage,
                    isVisible: true,
                    requestErr: null,
                }));
            }
        },
        [validation]
    );

    return {
        values: values as T,
        error,
        handleChangeValues,
        handleOnBlurValidation,
        handleSubmitForm,
    } as const;
}
