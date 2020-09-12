import React, { Component } from 'react';
import axios from 'axios';


export default class CreateUser extends Component {
    state = {
        users: [],
        userName: '',
        userEmail: '',
        userPassword : '',
        userPassword2 : '',
        user_token: ''
    }
    async componentDidMount() {
        // fetch()
        // const res = await axios.get('http://localhost:4000/api/user');
        // this.setState({ users: res.data });
        // console.log(this.state.users)
    }

    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
 
    };
    onChangeEmail = (e) => {
        this.setState({ userEmail: e.target.value });
    };
    onChangePasswd = (e) => {
        this.setState({ userPassword: e.target.value });
    };
    onChangePasswd2 = (e) => {
        this.setState({ userPassword2: e.target.value });
    };

    onSubmit = async e => {
        e.preventDefault();
        if ( this.state.userName === '') {return alert('Debe ingresar un nombre valido') }
        if ( this.state.userEmail === '') {return alert('Debe ingresar un nombre valido') }
        if ( this.state.userPassword ==='') {return alert('Debe ingresar password valido') }
        if (this.state.userPassword !== this.state.userPassword2 ) 
            {return alert('El password ingresado no coincide.') }
        const createUser = {
            username: this.state.userName,
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        const resp = await axios.post('http://localhost:4000/api/user/register',createUser );

        //     ,   
        //     headers: {
        //     'user-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvSUQiOjIsImNyZWF0ZWRBVCI6MTU5NzU5NjQ5MiwiZXhwaXJlZEF0IjoxNTk3NTk5NDkyfQ.WEyMcuBkz3mhhX1wNGe33t-CqxMNQiFT0KVRPNyZN5o'
        // }
        if (resp.data.errores){
        const msgError = resp.data.errores ;
        return alert(msgError)
        };
        const estadoLog = this.onRegisterUser() ;
        this.setState({ user_token: estadoLog.user_token });

     };

     onRegisterUser = async e => {
        const datUser = {
            username: this.state.userName,
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        const resp = await axios.post('http://localhost:4000/api/user/login', datUser);

        if (resp.data.error) {
            const msgError = resp.data.error;
            return alert(msgError)
        };
        
        localStorage.setItem("user", JSON.stringify(resp.data));

        setTimeout(function(){
            window.close();
            window.location.href="/" ;
        },2000); //Dejara un tiempo de 3 seg para que el usuario vea que se envio el formulario correctamente

     }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card  bg-secondary text-white ">
                        <div className="card-content white-text">
                            <span className="card-title">Bien venido a VIVIR BIEN APP</span>
                            <p>Diligencia una simple información para entender los beneficios de cambiar tus hábitos alimenticios</p>
                        </div>
                        <div className="card-action white-text">
                        <form onSubmit={this.onSubmit} >

                        <div className="row">
                            <div className="input-field col-md-6">
                                <label htmlFor ="first_name">Ingresa tu nombre</label>

                                <input placeholder="Nombre" 
                                    id="first_name" type="text" 
                                    className="validate"
                                    onChange={this.onChangeUserName}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col-md-6">
                                <label htmlFor="inputEmail">Correo electrónico</label>
                                <input placeholder="Email" id="inputEmail" 
                                type="email" className="validate"
                                onChange={this.onChangeEmail}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col-md-6">
                                <label htmlFor="inputPassword">Contraseña</label>
                                <input placeholder="Password" id="inputPassword" 
                                type="password" className="validate"
                                onChange={this.onChangePasswd}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col-md-6">
                            <label htmlFor="inputPassword">Repite contraseña</label>
                                <input placeholder="Password" id="inputPassword2" 
                                type="password" className="validate"
                                onChange={this.onChangePasswd2}/>

                            </div>
                        </div>                        
                        <button type="submit" className="btn btn-primary">Ya te puedes registrar </button>
                        <a href="/" className='text-dark'>      Volver </a>
                        </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
