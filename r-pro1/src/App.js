import './App.css';
import {Puplic} from './Components/Puplic'
import Mapping from './Components/Mapping';
import { useEffect, useState , useContext} from 'react';
import {Boss} from './Components/Puplic'
import {A} from './Components/Text'
const url= 'https://jsonplaceholder.typicode.com/users'

function App() {
const {ok2} = useContext(Boss)
const {joky} = useContext(Boss)
const [loading,setLoading] = useState(true)
const [tours,setTours] = useState(A)

const y = async() =>{
setLoading(true)
 const response = await fetch(url)
 setTours(await response.json())

 for(let i = 0;i< A.length ; i++){
 joky[i] = A[i]
 }


 try{
 setLoading(false)
 console.log(joky)
 }catch(error){
console.log(error)
 }
}
useEffect(()=>y,[])

if(loading){
return(<h1>Loading...</h1>)
}

if(joky.length == 0){
  return<div className='m-5 bg-danger text-center container p-5'><h1>No Cards</h1> <br />
<button onClick={y} className='btn bg-info'>Reset</button></div> 
}

return (
<div className='container'>

<Mapping />

</div> 
);
}

export default App;
