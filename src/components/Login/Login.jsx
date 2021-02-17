import React from 'react';
import {Field, reduxForm} from "redux-form/es/index";

let LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit}>
            <div>
                <Field placeholder ={'Login'} name ={'login'} component ={'input'}/>
            </div>
            <div>
                <Field placeholder ={'Password'} name ={'password'} component ={'input'}/>
            </div>
            <div>
                <Field type ={'checkbox'} name ={'rememberMe'} component ={'input'}/> remember me
            </div>
            <button>Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form:'login'}) (LoginForm);

const Login = () => {
    const onSubmit =(formData) =>{
        console.log(formData)
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm OnSubmit ={onSubmit()}/>
        </div>
    )
};

export default Login;