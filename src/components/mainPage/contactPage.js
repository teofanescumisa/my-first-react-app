import { useState } from "react";
import StyledForm from "../htmlElements/contact/styledForm";

function ContactPage () {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phoneNumber:"",
    })
    return (
        <StyledForm>
            <section>
                <label>Name</label>
                <input></input>
            </section>
            <section>
                <label>Email</label>
                <input></input>
            </section>
            <section>
                <label>Phone Number</label>
                <input></input>
            </section>
            <textarea />
            <button>Send Message</button>
        </StyledForm>
    );
};

export default ContactPage;