import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [api, setapi] = useState([]);

  useEffect(() => {
    // axios.get('https://fakestoreapi.com/products')
    // .then(response => {
    //   setapi(response.data);
    // })
    // .catch(error => {
    //   console.error('Error fetching data:', error);
    // })
  const abcd= async ()=>{
    const data= await fetch('https://fakestoreapi.com/products')
    const finalapidata= await data.json()
    setapi(finalapidata);
  }
  abcd();
  
  
}, [])

  // async function abcd(){
  //   const data= await fetch('https://fakestoreapi.com/products')
  //  const finalapidata = await data.json()
  //   setapi(finalapidata);
  //   console.log(finalapidata);
  // }
  // abcd();
  
  
  return (

<>
      <div className='text-center text-4xl text-green-500'>
        FETCH API DATA
      </div>
      {api.map((item) => (
        <div key={item.id} className='text-2xl border-2 m-4'>
          <h1 className='text-black text-left'>{item.title}</h1>
          <img src={item.image} height={50} width={50}/>
          <h2 className='text-gray-800 text-right'>{item.price}</h2>
        </div>
))}
    </>
  )
}

export default App