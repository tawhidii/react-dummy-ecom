import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';


const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [userLoggedIn] = useContext(UserContext)
    const onSubmit = data => {
        console.log(data);
    }

    console.log(watch("example")); // watch input value by passing the name of it

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="Enter name" defaultValue={userLoggedIn.name} />
        {errors.name && <span>This field is required</span>}
        <br />
        <br />
        <input {...register("email", { required: true })} placeholder="Enter email" defaultValue={userLoggedIn.email}/>
        {errors.email && <span>This field is required</span>}
        <br />
        <br />
        <input {...register("address", { required: true })} placeholder="Enter Address" />
        {errors.address && <span>This field is required</span>}
        <br />
        <br />
        <input {...register("phone", { required: true })} placeholder="Enter phone" />
        {errors.phone && <span>This field is required</span>}
        <br />

        <input type="submit" />
        </form>
    );
};

export default Shipment;