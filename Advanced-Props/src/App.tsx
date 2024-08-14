import React from 'react';
import {Card} from './components/Card';


const App: React.FC = () => {

  
  return (


    <>
      <div>
        <h1>Card Component</h1>
        <Card>
          <h1 className='text-3xl font-bold underline'>Card Title</h1>
          <p>Card Content</p>
        </Card>
        <Card>
          <form>
            <input type="text" placeholder="Enter your name" />
            <input type='text' placeholder='Enter your other name' />
            <input type='text' placeholder='enter your other other name' />
          </form>
        </Card>
        <Card>
          <button>Click Me</button>
        </Card>
      </div>

      
    </>


  )



}

export default App;
