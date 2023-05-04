import axios from "axios";
import { useForm } from "react-hook-form";

type LoginFormData = {
    token: string;
    email: string;
    password: string;
}
export default function MyForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        defaultValues: {},
    });

    const onSubmit = async (data: LoginFormData) => {
        console.log(data)
        // Handle form data here
        const response=await axios.post("http://localhost:8000/api/login_check", { "username": (data.email), "password": (data.password) })
        console.log(response)
     
        localStorage.setItem('token',response.data.token);
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">email</label>
            <input type="email" id="email" {...register("email")} />
            <label htmlFor="password">password</label>
            <input type="password" id="password" {...register("password")} />

            <button type="submit">Submit</button>
        </form>
    );
}