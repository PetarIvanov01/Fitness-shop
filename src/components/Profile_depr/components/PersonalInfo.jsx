import { memo } from 'react';
import Input from './Input';
import Label from './Label';

const PersonalInfo = memo(function PersonalInfo({
    isEditing,
    firstName,
    lastName,
    email,
    phoneNumber,
    handleOnChange,
}) {
    return (
        <div className="flex flex-col items-center py-6">
            <h2 className="pb-4 text-2xl font-semibold text-gray-300">
                Personal Information
            </h2>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-8 ">
                <div>
                    <Label>First Name:</Label>
                    <Input
                        name={'firstName'}
                        isEdit={isEditing}
                        value={firstName}
                        handleOnChange={handleOnChange}
                    />
                </div>
                <div>
                    <Label>Last Name:</Label>
                    <Input
                        name={'lastName'}
                        isEdit={isEditing}
                        value={lastName}
                        handleOnChange={handleOnChange}
                    />
                </div>
                <div>
                    <Label>Email:</Label>
                    <Input
                        name={'email'}
                        isEdit={isEditing}
                        value={email}
                        handleOnChange={handleOnChange}
                    />
                </div>
                <div>
                    <Label>Phone Number:</Label>
                    <Input
                        name={'phoneNumber'}
                        isEdit={isEditing}
                        value={phoneNumber}
                        handleOnChange={handleOnChange}
                    />
                </div>
            </div>
        </div>
    );
});
export default PersonalInfo;
