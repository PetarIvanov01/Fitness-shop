import Input from './Input';
import Paragraph from './Paragraph';

export default function PersonalInfo({
    isEditing,
    fullName,
    email,
    phoneNumber,
}) {
    const [firstName, lastName] = fullName ? fullName.split(' ') : ['', ''];

    return (
        <div className="flex flex-col items-center py-6">
            <h2 className="pb-4 text-2xl font-semibold text-gray-300">
                Personal Information
            </h2>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-8 ">
                <div>
                    <Paragraph>First Name:</Paragraph>
                    <Input isEdit={isEditing} value={firstName} />
                </div>
                <div>
                    <Paragraph>Last Name:</Paragraph>
                    <Input isEdit={isEditing} value={lastName} />
                </div>
                <div>
                    <Paragraph>Email:</Paragraph>
                    <Input isEdit={isEditing} value={email} />
                </div>
                <div>
                    <Paragraph>Phone Number:</Paragraph>
                    <Input isEdit={isEditing} value={phoneNumber} />
                </div>
            </div>
        </div>
    );
}
