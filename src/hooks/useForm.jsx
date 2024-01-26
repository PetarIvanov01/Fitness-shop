import { useState } from 'react';

export default function useForm(intialState = {}, onSubmit) {
    const [values, setValues] = useState(intialState);

    const handleChangeValues = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    return {
        values,
        handleChangeValues,
        handleSubmitForm,
    };
}
