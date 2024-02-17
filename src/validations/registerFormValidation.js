const REG_FIELDS = {
    firstName: (value) => {
        if (!value.trim()) {
            return 'First name is required';
        }
        if (value.length < 2 || !/^[A-Z][a-z]*$/.test(value)) {
            return 'Should start with an uppercase letter and be at least 2 characters long';
        }
        return '';
    },
    lastName: (value) => {
        if (!value.trim()) {
            return 'Last name is required';
        }
        if (value.length < 2 || !/^[A-Z][a-z]*$/.test(value)) {
            return 'Should start with an uppercase letter and be at least 2 characters long';
        }
        return '';
    },
    phoneNumber: (value) => {
        if (!value.trim()) {
            return 'Phone number is required';
        }
        if (!/\+[0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}/.test(value)) {
            return 'Please provide a valid phone number (e.g., +123 45 678 9012)';
        }
        return '';
    },
    email: (value) => {
        if (!value.trim()) {
            return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'Please provide a valid email address (e.g., example@email.com)';
        }
        return '';
    },
    password: (value) => {
        if (!value.trim()) {
            return 'Password is required';
        }
        if (
            value.length < 5 ||
            !/[0-9]/.test(value) ||
            !/[a-zA-Z]/.test(value)
        ) {
            return 'At least 5 char long with at least one number and one letter';
        }
        return '';
    },
    're-password': (value, password) => {
        if (!value.trim()) {
            return 'Repeat password is required';
        }
        if (password && value !== password) {
            return 'Passwords do not match';
        }
        return '';
    },
};

export function registerFieldValidation(key, value) {
    const validatorFnc = REG_FIELDS[key];

    if (!validatorFnc) {
        console.log('Error: There is no input field!');
        return null;
    }

    return validatorFnc(value);
}
