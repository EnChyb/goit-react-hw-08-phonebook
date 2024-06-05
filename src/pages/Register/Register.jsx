import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet";


const Register = () => {

    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <RegisterForm/>
        </>
    )

}

export default Register; 