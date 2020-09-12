import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import UserSetStatus from './UserSetStatus';

const API_URL = "http://localhost:4000/api/";
export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPassword: '',
            userPassword2: ''
        }
    }
    async componentDidMount() {
        // fetch()
        // const res = await axios.get('http://localhost:4000/api/user');
        // this.setState({ users: res.data });
        // console.log(this.state.users)
    }

    onChangeUserName = (e) => {
        this.setState({ user: {userName: e.target.value } });

    };
    onChangeEmail = (e) => {
        this.setState({ user: {userEmail: e.target.value }});
    };
    onChangePasswd = (e) => {
        this.setState({ userPassword: e.target.value });
    };
    onChangePasswd2 = (e) => {
        this.setState({ userPassword2: e.target.value });
    };

    onSubmit = async e => {
        e.preventDefault();
        if (this.state.userEmail === '') { return alert('Debe ingresar un nombre valido') }
        if (this.state.userPassword === '') { return alert('Debe ingresar password valido') }
        const regiUser = {
            // username: this.state.userName,
            email: this.state.user.userEmail,
            password: this.state.userPassword
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
        this.setState({
            user: {
            user_token: resp.data.success,
            userEmail: resp.data.userEmail,
            userName: resp.data.userName,
            userId :resp.data.userId
            },
            currentUser: resp.data.userName,
            userLoged: resp.data.success ==='' ? false : true 
        });
        
        localStorage.setItem("user", JSON.stringify(resp.data));

                //console.log(this.state.user);
        //this.props.history.push("/");
       // window.location.reload();
        // window.location.href="/";
    };

    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Bien venido a VIVIR BIEN APP</span>
                            <p>Ingresa a nuestra plataforma si ya te encuentras registrado...</p>
                        </div>
                        <div className="card-action white-text">
                            <form onSubmit={this.onSubmit} >

                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Email" id="inputEmail"
                                            type="email" className="validate"
                                            onChange={this.onChangeEmail} />
                                        <label htmlFor="inputEmail">Correo electrónico</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Password" id="inputPassword"
                                            type="password" className="validate"
                                            onChange={this.onChangePasswd} />
                                        <label htmlFor="inputPassword">Contraseña</label>
                                    </div>
                                </div>
                                {/* <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Nombre" 
                                    id="first_name" type="text" 
                                    className="validate"
                                    onChange={this.onChangeUserName}/>
                                    <label htmlFor ="first_name">Ingresa tu nombre</label>
                            </div>
                        </div> */}
                                <button type="submit" className="btn btn-primary">Ingresar </button>
                                <a href="/">       Volver </a>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

