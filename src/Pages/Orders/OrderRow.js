import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleItemDelete, handleStatusUpdate }) => {
    const { _id, serviceName, price, phone, service, img, status } = order;

    //alternatively we did this for image uploading
    /* const [orderService, setOrderService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4200/service/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service]) */



    return (
        <tr>
            <th>
                <button onClick={() => handleItemDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{phone}</td>
            <td>
                <button onClick={() => handleStatusUpdate(_id)} className='btn btn-ghost'>{status ? status : 'Pending'}</button>
            </td>
        </tr>
    );
};

export default OrderRow;