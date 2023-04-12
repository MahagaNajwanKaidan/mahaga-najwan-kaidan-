import React, { useState } from 'react'

const App = () => {
    const [nilai , setNilai] = useState (0);
  
    function handleClick(){
      setNilai(nilai + 1);
    }
  
      return <div>
       <button  onClick={handleClick}>
         <p>lah kok bisa {nilai} contohnya </p> 
      </button>
      </div>
      };


  export default App;
