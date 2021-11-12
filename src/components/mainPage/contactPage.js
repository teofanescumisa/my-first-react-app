import { useState } from "react";
import StyledForm from "../htmlElements/contact/styledForm";
import Input from "../htmlElements/input";
import TextArea from "../htmlElements/textarea";
import Button from "../htmlElements/button";



function ContactPage () {
    const [state,setState] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    })
    function onChangeHandler (e) {
        const target = e.target;
        const name= target.name;
        const value = target.value;
        
        setState((prevState) => ({
            ...prevState,
            [name]:value,
        }))   
    }
    function submitButton (event) {
        if(state.name.length > 1 && state.email && state.phone && state.message){ // More complex check with HTML5 if needed & same check will be in this line.
            event.preventDefault();
            setState({
            name:"",
            email:"",
            phone:"",
            message:"",
            });
            console.log(state); // Or send {state} to API with method Post
        }
    }
    
    return (
        <StyledForm>
            <section>
                <label>Name</label>
                <Input placeholder='Full Name' value={state.name} inputEvent={onChangeHandler} name="name" type='text'/>
            </section>
            <section>
                <label>Email</label>
                <Input placeholder='Email' value={state.email} inputEvent={onChangeHandler} name="email" type='email'/>
            </section>
            <section>
                <label>Phone Number</label>
                <Input placeholder='Mobil Phone Number' value={state.phone} inputEvent={onChangeHandler} name="phone" type='number'/>
            </section>
            <TextArea name="message" value={state.message} inputEvent={onChangeHandler} text='Type Your Message Here '/>
            <Button btnEvent={submitButton} text="Send Message" />
        </StyledForm>
    );
};

export default ContactPage;