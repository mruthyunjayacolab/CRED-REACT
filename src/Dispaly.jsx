import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
import {  useNavigate,useLocation } from "react-router-dom";

const Display = () => {

    let [data, setdata] = useState([])

    useEffect(()=>{

        let fetchData= async()=>{

            let response= await fetch('http://localhost:3000/user')
            let data= await response.json()
            setdata(data)
            

        }
        fetchData()
    },[])

   

    let del =(id) =>{

        fetch(`http://localhost:3000/user/${id}`,
        {
            'method': 'DELETE'

        }
        )
        alert('delete')
    }

    let Location = useLocation()
    let nav=useNavigate()

    let ed=(id) =>{

        if (Location.pathname == '/') {
            nav(`${id}`)
        }
    }
 
    return (

        <div className="emp">
            <h1>Display</h1>

            {
                data.map((x) => (
                    <div className="card">
                        <h1>{x.name}</h1>
                        <h1>{x.age}</h1>
                        <button onClick={()=>del(x.id)}>Delete</button>
                        <button onClick={()=>ed(x.id)}>Edit</button>
                        {/* <Link to={`/${x.id}`}> <button>Edit</button></Link> */}

                         
                    </div>

                ))

            }
        </div>
    );
}

export default Display;