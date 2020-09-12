import { createContext } from 'react';
 
const UserContext = createContext({});
 
export default UserContext;



// import React from 'react';
// import UserContext from './UserContext';
// import Button from './Button';
 
// const userMock = {
//  name: 'Alejandro',
//  email: 'alejandro@example.com',
// };
 

// Luego utilizamos el Provider para que el componente 
// hijo <Button/> tenga acceso al contexto. 

// function ShowContextExample() {
//  return (
//    <UserContext.Provider value={userMock}>
//      <Button />
//    </UserContext.Provider>
//  );
// }


// Finalmente, en el componente Button, utilizando 
// el hook useContext, accedemos a los datos que definimos como globales

// import React, { useContext } from 'react';
// import UserContext from './UserContext';
 
// function Button() {
//  const { name } = useContext(UserContext);
//  return (
//    <button type="button">
//      {name}
//    </button>
//  );
// }

