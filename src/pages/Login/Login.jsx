import { LoginForm } from "components/LoginForm/LoginForm";
import { Helmet } from "react-helmet";

const Login = () => {
    return (
        <>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <LoginForm/> 
        </>
    )
};

export default Login;