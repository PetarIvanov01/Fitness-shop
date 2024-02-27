import Input from './Input';
import Paragraph from './Paragraph';

export default function ShippingInfo({ isEditing }) {
    return (
        <div className="flex flex-col items-center py-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-300">
                Shipping Information
            </h2>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
                <div>
                    <Paragraph>Country:</Paragraph>
                    <Input isEdit={isEditing} />
                </div>
                <div>
                    <Paragraph>City:</Paragraph>
                    <Input isEdit={isEditing} />
                </div>
                <div>
                    <Paragraph>Address:</Paragraph>
                    <Input isEdit={isEditing} />
                </div>
                <div>
                    <Paragraph>ZIP code:</Paragraph>
                    <Input isEdit={isEditing} />
                </div>
            </div>
        </div>
    );
}
