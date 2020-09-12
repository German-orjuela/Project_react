import React, { Component } from 'react'
import axios from 'axios';
import UserSetStatus from './UserSetStatus' ;
import PersonExiste from './PersonExiste' ;


export default class GrupoFam extends Component {

    constructor() {
        super()
        this.state = {
            nombreMaes: '',
            NumeroPers: 0,
            user: {},
            persona: {},
        }

    }

    async componentDidMount() {
        const user = UserSetStatus.getCurrentUser();
        console.log(user) ;
        const userAct = user.userId
        if (user){
            const listPerson = await axios.get('http://localhost:4000/api/personas/'+userAct, {headers: {  'user-token' : user.success }} );
            if (listPerson.data.error) { return alert("No se referencia TOKEN para la busqueda")}
            this.setState({NumeroPers: listPerson.data.length, 
                user: user, 
                persona: listPerson })
            if (this.state.NumeroPers === 0 ) { return <p>Debemos crear alguna persona como usuario Principal</p>}
        } else { return alert("no se pudo determinar el usuario")}
    }

    addPersona= () => {
        return <h1>Hola add persona</h1>
    };

    formSalir= () => {
        return <h1>Hola Form Salir</h1>
    };
    

    render() {
    //    console.log(this.state); 
    //     style={{backgroundImage: "url("+"https://lorempixel.com/100/190/nature/6"+")"}}
     //  debugger ;
    //    console.log(setUser); 
        return (
            <div className="col-sm-8" > 
                <h2 className="header">Tú composición familiar</h2>
                <div className="card horizontal" >
                    <div className="card-image"  >
                        {/* <img src="https://lorempixel.com/100/190/nature/6" /> */}
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>Este es la composicion familiar de : {this.state.userName}</p>
                            <p>El Numero de Personas a su cargo {this.state.NumeroPers}</p>
                        </div>
                        <div className="card-action">
                            {console.log(this.state.persona)}
                            <PersonExiste person={this.state.persona } />
                            <button onClick={this.addPersona}>ADD+</button>
                            <button onClick={this.formSalir}>Volver</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


// idmaestro: 0,
// nombres: '',
// apellidos: '',
// telefono: '',
// edad: 0,
// talla: 0,
// peso: 0,
// genero: 0,
// tension: false,
// diabetes: false,
// colon: false,
// obesidad: false