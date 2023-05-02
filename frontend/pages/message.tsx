import axios from "axios";
import { useForm } from "react-hook-form";

type MessageFormData = { message: string; }
export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<MessageFormData>({
    defaultValues: {},
  });

  const onSubmit = (data:MessageFormData) => {
    console.log(data)
    // Handle form data here
    axios.post("http://localhost:8000/api/create-message",{"message":(data.message)})
  
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="message">Name</label>
      <input type="text" id="message" {...register("message")} />


      <button type="submit">Submit</button>
    </form>
  );
}
