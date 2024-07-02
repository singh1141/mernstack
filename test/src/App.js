
// function App(){
//     return (
//      <div>

//         <h1>Hello hii i ama component</h1>
//         </div>
       
//     )
// }

// export default App;
import React, { useState } from 'react'

export default function App() {

    const[count,setCount]=useState(0);

    const handleClick=()=>{
        setCount(count+1);
    }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}> +</button>
    </div>
  )
}
