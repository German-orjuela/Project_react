import React,{useState} from 'react'


const personExiste = (props) => {

    const personas = props.person
    const numbers = [1, 2, 3, 4, 5];
    // const [miNombre, setmiNombre] = useState('German')

    const presentaPersonas = () => {
     debugger ;
        if (personas.data) {            
            personas.data.map((e,i) => {   
                return <p>{personas.data[i].nombres}</p>
                })
        } else { return <p>Persona indeterminada</p>}
    }



    return (
        
        <div>
            <p>Personas a presentar {presentaPersonas()}</p>
           <p>Este es el nuevo funcionario.</p>

        </div>
    )
}

export default personExiste


// ({personas.data.map( ()=> {<a>Este es el nuevo funcionario aaa.</a>})})
//     <tr>
//         <td>
//             {pers.nombres}
//         </td>
//     </tr>                
// })
// )


