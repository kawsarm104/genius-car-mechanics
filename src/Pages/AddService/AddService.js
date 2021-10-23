import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
      const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="add-service">
            <h2>Please add a service</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("firstName", { required: true, maxLength: 20 })} />
      <textarea placeholder="Description" {...register("Description", {required: true})} />
      <input placeholder="Price" type="number" {...register("price", { required: true })} />
      <input placeholder="Image url"  {...register("img-url", { required: true })} />
      <input type="submit" />
    </form>

         </div>
    );
};

export default AddService;