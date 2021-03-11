import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControl/FormsControls'

const LoginForm = (props)=>{
    return(
            <form onSumbit={"props.handleSubmit"}> {/* Это свойство выставляю чтобы отключить поведение формы по умолчанию и не перезагружать страницу */}
                <div>
                    <Field placeholder={"Login"} name={"login"} component={Input}
                    validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}
                    validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm=reduxForm({
    form:'login'
})(LoginForm)

const Login = (props)=>{
    const onSubmit=(formData)=>{

    }
    return<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login