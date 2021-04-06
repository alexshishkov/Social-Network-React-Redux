import React from 'react';
import c from './Login.module.css'
import {Field, reduxForm} from "redux-form/es/index";

let LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit}>
            <div className={c.input}>
                <Field  placeholder ={'Login'} name ={'login'} component ={'input'}/>
            </div>
            <div className={c.input}>
                <Field placeholder ={'Password'} name ={'password'} component ={'input'}/>
            </div>
            <div className={c.input}>
                <Field type ={'checkbox'} name ={'rememberMe'} component ={'input'}/> remember me
            </div>
            <a href="#" className={c.button}>Login</a>
        </form>
    )
};

const LoginReduxForm = reduxForm({form:'login'}) (LoginForm);

const Login = () => {
    const onSubmit =(formData) =>{};
    return (
        <div className={c.wrap}>
            <h1 className={c.logo}>LOGIN</h1>
            <LoginReduxForm OnSubmit ={onSubmit()}/>
        </div>
    )
};

export default Login;