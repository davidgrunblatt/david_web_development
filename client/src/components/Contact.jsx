import React, { Component } from 'react'
import axios from 'axios'; 
import contact_header from '../images/contact.png'; 

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

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value }); 
    }

    zeroOut(){
        console.log('zeroed'); 
        this.setState({ name: ''} );
        this.setState({ subject: ''} );
        this.setState({ message: ''} );
        this.setState({ sent: true }); 
        setTimeout(() => {
            this.setState({ sent: false });
        }, 5000);
    }

    async makePostReq(e){
        e.preventDefault(); 

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

    render(){
            return(
                <div id = 'contact' className = 'silver margin'>
    
                    {this.state.sent === false ? <img className = 'header' src = {contact_header} alt = 'contact header' /> : <h1>Sent!</h1>}

                    <form id = 'form' onSubmit = {this.makePostReq}>
                       <div className = 'form-group'>
                            <label htmlFor = 'name'>Name:</label>
                            <input type = 'text' name = 'name' onChange = {this.handleChange} className = 'form-control' value = {this.state.name} required/>
                       </div>
                       <div className = 'form-group'>
                            <label htmlFor = 'subject'>subject:</label>
                            <input type = 'text' name = 'subject' onChange = {this.handleChange} className = 'form-control' value = {this.state.subject} required/>
                       </div>
                       <div className = 'form-group'>
                            <label htmlFor = 'message'>message:</label>
                            <textarea type = 'text' name = 'message' onChange = {this.handleChange} className = 'form-control' value = {this.state.message} required></textarea>
                       </div>
                        <button type = 'submit' className = 'btn btn-sm btn-block'>{this.state.sent === true ? "Sent!" : "Send"}</button>
                    </form>
    
                </div>
            )
        } 
}

export default Contact; 