import React from 'react'
import { Form } from 'react-hook-form'
import {z} from 'zod';


    const schema = z.object({
  name: z
  .string()
  .min(3, { message: 'User name must be at least 3 characters!' })
  .max(20, { message: "The name must not be more than 20 characters!"}),
 mail: z
 .string()
 .email({message: "Invalid email address!"}),
 password: z.string().min(8, {message: "password must be at least 8 characters"}),
 firstname: z.string().min(1, {message: "first name is required!"}),
 lastdname: z.string().min(1, {message: "last name is required!"}),
 phone: z.string().min(1, {message: "Phone number is required!"}),
 address: z.string().min(1, {message: "address is required!"}),
 birthday: z.date( {message: "birthday is required!"}),
 sex: z.enum(["make", "female"], {message: "sex is required! "}),
 img: z.instanceof(File, {message: "image is required"}),


});


const TeacherForm = ({type, data}: {type: "create" | "update", data?:any}) => {

  return (
    <form action="" className=''>input</form>
  )
}

export default TeacherForm
