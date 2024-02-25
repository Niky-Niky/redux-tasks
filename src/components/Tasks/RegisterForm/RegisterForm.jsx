import { useDispatch } from "react-redux";

export const RegisterForm = () => {
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset()
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Name 
                <input type='text' name="name"/>
            </label>
            <label htmlFor="">
                Email 
                <input type="email" name="email"/>
            </label>
            <label htmlFor="">
                Password 
                <input type="password" name="password"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}