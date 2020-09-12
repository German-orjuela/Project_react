import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    state = {
        users: []
    }
    async componentDidMount() {
        // fetch()
        //const res = await axios.get('http://localhost:4000/api/user/login');
        //console.log(res)
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'JWT fefege...'
        // }

        const datUser = {
            username: 'German Eduardo',
            email: 'Germane@gmail.com',
            password: '12345'
        };
        //const res = await axios.post('http://localhost:4000/api/user/login', datUser);
        
        const res = await axios.get('http://localhost:4000/api/user');
        this.setState({ users: res.data });
        console.log(this.state.users);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md8">
                    <div className="card cardbody">
                        <h3> Creando un nuevo usuario</h3>
                    </div>

                </div>

                <div className="col-md8">
                    <ul className='list-group'>
                        {
                            this.state.users.map(user => <li className="list-group-items list-group-items-action" key={user.id}>
                                    {user.username}
                                </li>)
                        }
                    </ul>

                </div>
            </div>
        )
    }
}
