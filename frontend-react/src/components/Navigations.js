import React, { Component, Fragment } from 'react';
// import CreateUser from './components/CreateUser';
import { Link } from 'react-router-dom';
import UserSetStatus from './UserSetStatus';
import LoginUser from './LoginUser';
import Prueba from './Prueba';

export default class Navigations extends Component {
    constructor(props) {
        super(props);
        this.loginUser = this.loginUser.bind(this);
        this.logOut = this.logOut.bind(this);
        this.state = {
            user: {
                userName: '',
                userEmail: '',
                user_token: '',
                userId: 0
            },
            currentUser: undefined,
            userLoged: false
        };
    }
    componentDidMount() {

        const user = UserSetStatus.getCurrentUser();
    //    console.log(userk);
        if (user) {
            this.setState({
                user: user,
                userId: user.id,
                currentUser: user.userName,
                userLoged: user.user_token === '' ? false : true
            });

        }
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });

    }

    logOut() {
        UserSetStatus.logout();
    }

    loginUser() {
      console.log("Efectivamente ingresé a Login");
     <Prueba/>
        //return(<LoginUser/>)

    };
    render() {
 //       debugger
        const { currentUser, userLoged,user } = this.state;
//        user = UserSetStatus.getCurrentUser();
        const userID = this.state.user.userId
//        console.log(userID)
        return (
            <div>
                {/* NEVEGACION */}

                <p>Si el usuario está logeado: {userLoged ? currentUser : 'NO'} </p>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to={'/'} >Logo</Link>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">VIVIR BIEN APP</a></li>                            
                            {userLoged ?
                                <Fragment>
                                    <li><a href="/GrupoFam" userId={userID}>Grupo familiar</a></li>
                                    <li><a href="/ProgMenu">Programa tu menú</a></li>
                                    <li><a href="/RevisaProg">Revisa programación</a></li>
                                    <li><a href="/" onClick={this.logOut()}>Salir</a></li>
                                </Fragment>
                                : <Fragment>
                                    <li><a href="badges.html">Distribuidores</a></li>
                                    <li><a onClick={(e) => this.loginUser()}>Ingresar</a></li>
                                    <li><a href="/Register">Regístrate</a></li>
                                </Fragment>
                            }
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/">VIVIR BIEN APP</a></li>
                    {userLoged ?
                        <Fragment>
                            <li><a href="/GrupoFam">Grupo familiar</a></li>
                            <li><a href="/ProgMenu">Programa tu menú</a></li>
                            <li><a href="/RevisaProg">Revisa programación</a></li>
                            <li><a href="/" onClick={this.logOut()} >Salir</a></li>
                        </Fragment>
                        : <Fragment>
                            <li><a href="badges.html">Distribuidores</a></li>
                            <li><a onClick={(e) => this.loginUser()}>Ingresar</a></li>
                            <li><a href="/Register">Regístrate</a></li>
                        </Fragment>
                    }
                </ul>

            </div>
        )
    }
}


