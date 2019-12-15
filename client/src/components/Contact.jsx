import React, { Component } from 'react'
import axios from 'axios'; 
import contact_header from '../images/contact.png'; 
import Joi from 'joi-browser'; 

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            subject:'',
            message:'',
            sent: false,
            contact_header
        }
        this.handleChange = this.handleChange.bind(this);
        this.makePostReq = this.makePostReq.bind(this);
    }

    // HANDLE INPUT CHANGE
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value }); 
    }

    // ZERO OUT FORM ON SETTIMEOUT
    zeroOut(){
        this.setState({ name: ''} );
        this.setState({ subject: ''} );
        this.setState({ message: ''} );
        this.setState({ sent: true }); 
        setTimeout(() => {
            this.setState({ sent: false });
        }, 5000);
    }

    // JOI INPUT VALIDATION 
    validateData(data){
        const schema = {
            name: Joi.string().min(5).max(50).required(),
            subject: Joi.string().min(5).max(250).required(),
            message: Joi.string().min(5).required()
        }
        return Joi.validate(data, schema); 
    }

    // POST REQ W/ AXIOS METHOD
    async makePostReq(e){
        e.preventDefault(); 

        // JOI VALIDATION 
        const stuff = {
            name: this.state.name,
            subject: this.state.subject,
            message: this.state.message
        }
        const error = this.validateData(stuff); 
        if (error.error) {
            alert('Your name and subject should be atleast 5 characters long, and your message atleast 10'); 
        } 

        try {   // AXIOS POST REQ
                this.zeroOut(); 
                const { name, subject, message } = this.state; 
                const data = await axios.post('/api/mail', {
                    name,
                    subject,
                    message
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        catch(ex){
            console.log('Excemption sending React post req'); 
        }
    }

    render(){
            return(
                <div id = 'contact' className = 'silver margin'>
                    {this.state.sent === false ? <img className = 'header' src = {contact_header} alt = 'contact header' /> : <h1>Sent!</h1>}

                    <form id = 'form' onSubmit = {this.makePostReq}>
                       <div className = 'form-group'>
                            <label htmlFor = 'name' style = {{fontWeight: 'bold'}}>Name:</label>
                            <input type = 'text' name = 'name' onChange = {this.handleChange} className = 'form-control' value = {this.state.name} required/>
                       </div>
                       <div className = 'form-group'>
                            <label htmlFor = 'subject' style = {{fontWeight: 'bold'}}>Subject:</label>
                            <input type = 'text' name = 'subject' onChange = {this.handleChange} className = 'form-control' value = {this.state.subject} required/>
                       </div>
                       <div className = 'form-group'>
                            <label htmlFor = 'message' style = {{fontWeight: 'bold'}}>Message:</label>
                            <textarea type = 'text' name = 'message' onChange = {this.handleChange} className = 'form-control' value = {this.state.message} required></textarea>
                       </div>
                        <button type = 'submit' className = 'btn btn-sm btn-block'>{this.state.sent === true ? "Sent!" : "Send"}</button>
                    </form>
    
                </div>
            )
        } 
}

export default Contact; 