import { useCallback, useState } from 'react';

export default function useForm(
    intialState = {},
    onSubmit,
    validation = () => {}
) {
    const [values, setValues] = useState(intialState);
    const [error, setError] = useState({
        isVisible: true,
        requestErr: null,
    });

    const handleChangeValues = useCallback(
        (e) => {
            const keys = Object.keys(error);

            if (keys.length !== 1) {
                setError((state) => {
                    /*eslint no-unused-vars: "off"*/
                    const { [e.target.name]: _, ...rest } = state;
                    return { ...rest, requestErr: null, isVisible: false };
                });
            }

            setValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        },
        [error]
    );

    const handleSubmitForm = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                await onSubmit(values);
            } catch (error) {
                if (error.message) {
                    setError((state) => ({
                        ...state,
                        requestErr: error.message,
                    }));
                }
            }
        },
        [onSubmit, values]
    );

    const handleOnBlurValidation = useCallback(
        (e) => {
            const key = e.target.name;
            const errorMessage = validation(key, values[key]);

            setError((state) => {
                const obj = { ...state };

                if (errorMessage) {
                    obj[key] = errorMessage;
                }

                return { ...obj, isVisible: true };
            });
        },
        [validation, values]
    );

    return {
        values,
        error,
        handleChangeValues,
        handleOnBlurValidation,
        handleSubmitForm,
    };
}
