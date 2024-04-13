import { memo } from 'react';
import TableRow from './TableRow';

const OrderTable = memo(function OrderTable({ cart, totalPrice }) {
    return (
        <div className="w-full text-white">
            <table className="w-full text-left">
                <thead className="max-bil-s:text-sm border">
                    <tr>
                        <th className="p-2">Product</th>
                        <th className="p-2">Subtotal</th>
                    </tr>
                </thead>
                <tbody className="text-left">
                    {cart.length > 0 &&
                        cart.map((order) => {
                            const orderInfo = {
                                quantity: order.quantity,
                                name: order.title,
                                subtotal:
                                    Number(order.price) *
                                    Number(order.quantity),
                            };
                            return (
                                <TableRow
                                    key={order.product_id}
                                    {...orderInfo}
                                />
                            );
                        })}
                    <tr className="max-bil-s:text-sm border text-left">
                        <td className="p-2 font-semibold">
                            <span>Subtotal:</span>
                        </td>
                        <td className="p-2">
                            <span className="">$ 3232.23</span>
                        </td>
                    </tr>

                    <tr className="max-bil-s:text-sm border">
                        <td className="p-2 font-semibold">
                            <span>Shipping:</span>
                        </td>
                        <td className="p-2 hover:cursor-pointer hover:underline">
                            <span className="">$ 25</span>
                        </td>
                    </tr>

                    <tr className="max-bil-s:text-sm border">
                        <td className="p-2 font-bold">
                            <span>Total:</span>
                        </td>
                        <td className="p-2 hover:cursor-pointer hover:underline">
                            <span className="font-semibold">
                                $ {totalPrice.toFixed(2)}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
});

export default OrderTable;
