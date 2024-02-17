import { useState } from 'react';

export default function useForm(
    intialState = {},
    onSubmit,
    validation = () => {}
) {
    const [values, setValues] = useState(intialState);
    const [error, setError] = useState({
        requestErr: null,
    });

    const handleChangeValues = (e) => {
        // const keys = Object.keys(error);

        setError((state) => ({
            requestErr: state.requestErr,
        }));

        // if (keys.length !== 1) {
        //     setError((state) => {
        //         const { [e.target.name]: _, ...rest } = state;
        //         return { ...rest, requestErr: null };
        //     });
        // }

        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(values);
        } catch (error) {
            throw error;
        }
    };

    const handleOnBlurValidation = (e) => {
        const key = e.target.name;
        const errorMessage = validation(key, values[key]);

        if (errorMessage) {
            setError((state) => ({ ...state, [key]: errorMessage }));
        }
    };

    return {
        values,
        error,
        handleChangeValues,
        handleOnBlurValidation,
        handleSubmitForm,
    };
}
