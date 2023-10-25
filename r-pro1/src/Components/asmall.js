import { useState ,useContext} from "react"
import {Boss} from './Puplic'
export const Oop = ({id,name})=> {
const [mark,setMark] = useState(false)
const {remove} = useContext(Boss)
return(
        <li className='mb-3 d-flex justify-content-between align-items-center m-2'
        style={{
            listStyle : 'none'
        }}>
    <img data-visualcompletion="media-vc-image" alt="May be an image of 1 person and smiling" className="x1bwycvy x193iq5w x4fas0m x19kjcj4"  src="https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/366546367_3398699837056971_1173453459821253054_n.jpg?stp=cp6_dst-jpg&amp;_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=09cbfe&amp;_nc_ohc=bLcQ01EkK2cAX9lAcRV&amp;_nc_ht=scontent.fcai20-4.fna&amp;oh=00_AfBLAgyf5yxbegjideI3dwGsVIc8bEPoHa3YswnfXcO7Nw&amp;oe=64EA1AE4" width={100} className='rounded-circle' />   
     
      <button className='btn bg-success' onClick={()=>remove(id)}>Remove</button>
    
     <div className='bg-warning p-2 rounded d-flex justify-content-between'style={{width:'200px'}}>
        <span className='text-light'>{mark ? name : ((name.substring(0,50))+'...')} 
        <button onClick={() => setMark(!mark)} style={{
          fontSize:'14px',color:'black',cursor:'pointer',background:'transparent',
          border:'none'}}>{mark ? 'Show Less' : 'Show More'}</button>
        </span>
    
     </div>
    
     </li> 
    
    ) 
}


