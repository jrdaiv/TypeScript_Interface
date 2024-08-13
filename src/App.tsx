import React from 'react';
import { UserInfo } from './UserInfo';



const App: React.FC = () => {
  const user = {
    name: 'Bat Man',
    age: 30,
    email: 'batmaine@cave.com'
  };
  


  return (


    <>
      <div>
        <UserInfo name={user.name} age={user.age} email={user.email}/>
      </div>

      
    </>


  )

}

export default App
