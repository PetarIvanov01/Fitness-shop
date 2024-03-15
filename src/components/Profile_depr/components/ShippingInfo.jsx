import { memo } from 'react';
import Input from './Input';
import Label from './Label';
import Select from './Select';

const ShippingInfo = memo(function ShippingInfo({
    isEditing,
    handleOnChange,
    country,
    city,
    address,
    postcode,
}) {
    return (
        <div className="flex flex-col items-center py-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-300">
                Shipping Information
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-8">
                <div>
                    <Label id={'country'}>Country:</Label>
                    <Select
                        value={country}
                        handleOnChange={handleOnChange}
                        isEditing={isEditing}
                    />
                </div>
                <div>
                    <Label>City:</Label>
                    <Input
                        isEdit={isEditing}
                        handleOnChange={handleOnChange}
                        name={'city'}
                        value={city}
                    />
                </div>
                <div>
                    <Label>Address:</Label>
                    <Input
                        isEdit={isEditing}
                        handleOnChange={handleOnChange}
                        name={'address'}
                        value={address}
                    />
                </div>
                <div>
                    <Label>ZIP code:</Label>
                    <Input
                        isEdit={isEditing}
                        handleOnChange={handleOnChange}
                        name={'postcode'}
                        value={postcode}
                    />
                </div>
            </div>
        </div>
    );
});
export default ShippingInfo;
