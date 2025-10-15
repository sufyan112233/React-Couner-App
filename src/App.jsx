import React, { useState } from 'react';
import Display from './Components/Display';
import Controls from './Components/Controls';

const App = () => {
  const [count, counter] = useState(0)
 
  return (
    <div>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Display count={count}/>
      <Controls count={count} counter={counter}/>
    </div>
    </div>
  );
};


export default App;