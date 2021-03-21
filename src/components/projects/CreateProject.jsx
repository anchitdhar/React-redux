import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function CreateProject() {
  const { register, handleSubmit, errors } = useForm();
  
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch({type:"CREATE_PROJECT_DATA",payload: data})
  };

  const data1= useSelector(state => state.project.projects)
  useEffect(() => {
    console.log("data appended")
    console.log(data1)
  },[data1])

  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" name="title" ref={register} />
      <textarea name="content" ref={register} />

      <input type="submit" />
    </form>
  );
}