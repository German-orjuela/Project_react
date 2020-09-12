import React, { Component } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:4000/api/";

export default class LoginUser extends Component {
    userPassword='';
    userPassword2= '';
    userName='';
    userEmail='';

    onChangeUserName = (e) => {
        this.userName= e.target.value 

    };
    onChangeEmail = (e) => {
        this.userEmail= e.target.value 
    };
    onChangePasswd = (e) => {
        this.userPassword= e.target.value 
    };
    onChangePasswd2 = (e) => {
        this.userPassword2= e.target.value
    };

    onSubmit = async e => {
        e.preventDefault();
        if (this.userEmail === '') { return alert('Debe ingresar un nombre valido') }
        if (this.userPassword === '') { return alert('Debe ingresar password valido') }
        const regiUser = {
            // username: this.state.userName,
            email: this.userEmail,
            password: this.userPassword
        }

        const resp = await axios.post(API_URL+'user/login', regiUser);
        //     ,   
        //     headers: {
        //     'user-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvSUQiOjIsImNyZWF0ZWRBVCI6MTU5NzU5NjQ5MiwiZXhwaXJlZEF0IjoxNTk3NTk5NDkyfQ.WEyMcuBkz3mhhX1wNGe33t-CqxMNQiFT0KVRPNyZN5o'
        // }
        if (resp.data.error) {
            const msgError = resp.data.error;
            return alert(msgError)
        };
            // user_token: resp.data.success,
            // userEmail: resp.data.userEmail,
            // userName: resp.data.userName,
            // userId :resp.data.userId
            // currentUser: resp.data.userName,
            // userLoged: resp.data.success ==='' ? false : true 
        
        localStorage.setItem("user", JSON.stringify(resp.data));

        setTimeout(function(){
            window.close();
            window.location.href="/" ;
        },2000); //Dejara un tiempo de 3 seg para que el usuario vea que se envio el formulario correctamente

                //console.log(this.state.user);
        //this.props.history.push("/");
       // window.location.reload();
        // window.location.href="/";
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-secondary text-white blue-grey darken-1">
                        <div className="card-content gray-text">
                            <span className="card-title">Bien venido a VIVIR BIEN APP</span>
                            <p>Ingresa a nuestra plataforma si ya te encuentras registrado...</p>
                        </div>
                        <div className="card-action white-text">
                            <form onSubmit={this.onSubmit} >

                                <div className="row">
                                    <div className="input-field col-md-6">
                                        <label htmlFor="inputEmail">Correo electrónico  
                                        <input placeholder="Email" id="inputEmail"
                                            type="email" className="validate"
                                            onChange={this.onChangeEmail} />
                                        </label>


                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col-md-6">
                                        <label htmlFor="inputPassword">Contraseña  </label>
                                        <input placeholder="Password" id="inputPassword"
                                            type="password" className="validate"
                                            onChange={this.onChangePasswd} />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Ingresar </button>
                                <a href="/" className='text-dark'>       Volver </a>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

