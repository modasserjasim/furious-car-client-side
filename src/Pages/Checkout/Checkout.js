import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title, price, img } = service;

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            img,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if (phone.length > 10) {
        //     alert('Phone number should be 10 characters or long')
        // }

        // send the data using POST Method
        fetch('http://localhost:4200/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Your order has been placed!')
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div className='bg-slate-50 p-20 my-16 rounded-md'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl text-center'>Your Selected Item: {title}</h2>
                <h3 className='text-2xl text-center mb-8'>Price: {price}</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input name='email' type="text" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered w-full" />

                </div>
                <textarea name='message' className="textarea textarea-bordered h-30 w-full mt-4" placeholder="Your Message" required></textarea>
                <button className="btn w-full text-xl mt-4">PLACE YOUR ORDER</button>
            </form>
        </div>
    );
};

export default Checkout;