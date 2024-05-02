import { useCallback, useRef, useState } from 'react';

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
                if (error.requestErr === null) {
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
        [onSubmit, values, error.requestErr]
    );

    const handleOnBlurValidation = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name as keyof T;
            isTriggeredErrorOnChange.current = false;

            if (typeof validation === 'function') {
                const errorMessage = validation(key, values[key] as string);

                setError((prevState) => ({
                    ...prevState,
                    [key]: errorMessage,
                    isVisible: true,
                    requestErr: null,
                }));
            }
        },
        [validation, values]
    );

    return {
        values: values as T,
        error,
        handleChangeValues,
        handleOnBlurValidation,
        handleSubmitForm,
    } as const;
}
