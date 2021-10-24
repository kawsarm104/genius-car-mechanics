import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
      const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post('http://localhost:3001/services', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('data inserted successfully')
          reset()
      }
      })
    
    
  };

    return (
      <div className="add-service">
      <h2>Please add a service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("firstName", { required: true, maxLength: 20 })} />
      <textarea placeholder="Description" {...register("Description", {required: true})} />
      <input placeholder="Price" type="number" {...register("price", { required: true })} />
      <input placeholder="Image url"  {...register("img", { required: true })} />
      <input type="submit" />
    </form>

         </div>
    );
};

export default AddService;