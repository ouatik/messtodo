import { useForm } from "react-hook-form";

type MessageFormData = { message: string; }
export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<MessageFormData>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    // Handle form data here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="message">Name</label>
      <input type="text" id="message" {...register("message")} />


      <button type="submit">Submit</button>
    </form>
  );
}
