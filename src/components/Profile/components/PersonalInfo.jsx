import { memo } from 'react';
import Input from './Input';
import Paragraph from './Paragraph';

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
                    <Paragraph>First Name:</Paragraph>
                    <Input
                        name={'firstName'}
                        isEdit={isEditing}
                        value={firstName}
                        handleOnChange={handleOnChange}
                    />
                </div>
                <div>
                    <Paragraph>Last Name:</Paragraph>
                    <Input
                        name={'lastName'}
                        isEdit={isEditing}
                        value={lastName}
                        handleOnChange={handleOnChange}
                    />
                </div>
                <div>
                    <Paragraph>Email:</Paragraph>
                    <Input
                        name={'email'}
                        isEdit={isEditing}
                        value={email}
                        handleOnChange={handleOnChange}
                    />
                </div>
                <div>
                    <Paragraph>Phone Number:</Paragraph>
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
