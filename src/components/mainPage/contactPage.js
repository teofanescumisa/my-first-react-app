import { useState } from "react";
import StyledForm from "../htmlElements/contact/styledForm";
import Input from "../htmlElements/input";
import TextArea from "../htmlElements/textarea";



function ContactPage () {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState(+40);
    const [message,setMessage] = useState("");
    
    function changeName (event) {
        setName(event.target.value);
    }
    function changeEmail (event) {
        setEmail(event.target.value);
    }
    function changePhone (event) {
        setPhone(event.target.value);
    }
    function changeMessage (event){
        setMessage(event.target.value);
    }
    return (
        <StyledForm>
            <section>
                <label>Name</label>
                <Input placeholder='Full Name' value={name} inputEvent={changeName} name="name" type='text'/>
            </section>
            <section>
                <label>Email</label>
                <Input placeholder='Email' value={email} inputEvent={changeEmail} name="email" type='email'/>
            </section>
            <section>
                <label>Phone Number</label>
                <Input placeholder='Mobil Phone Number' value={phone} inputEvent={changePhone} name="phoneNumber" type='number'/>
            </section>
            <TextArea value={message} inputEvent={changeMessage} />
            <button>Send Message</button>
        </StyledForm>
    );
};

export default ContactPage;