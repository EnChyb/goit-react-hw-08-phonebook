import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const onSubmit = (e) => {
            e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
        );  
    form.reset();
        
    }
    return (
        <div>
            <h3>Create your account using this form!</h3>
            <form onSubmit={onSubmit}>
                <label>Username:
                    <input
                        type="text"
                        name="name"
                        required />

                </label>
                <label>E-mail:
                    <input
                        type="email"
                        name="email"
                        required />
                </label>
                <label>Password:
                    <input 
                        type="password"
                        name="password"
                        required />
                </label>
                <button type ="submit">Register</button>
            </form>
        </div>

    )
    
}
