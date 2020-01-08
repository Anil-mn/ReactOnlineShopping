import React from 'react';
import './sign-in-component.scss'
import FormInput from '../form-input/formInput-component'
import CustomButton from '../coustom-button/customButton-component'
class SignIn extends React.Component{
    constructor(props){
     super(props)
    this.state ={
        email:'',
        password:''
    }}
    handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: '', password: '' });
      }
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    
render(){
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email'  type='email' handleChange={this.handleChange} 
                value={this.state.email} label='email'/>
                <FormInput name='password' type='password'
                handleChange={this.handleChange}
                 value={this.state.password} 
                 label='password' />
                <CustomButton type='submit' >SignIn</CustomButton>
            </form>

        </div>
    )
}
}
export default SignIn;