import { useState } from "react";

const Create = () => {

  
   let[name,setname]=useState('')
   let[age,setage]=useState('')

    let submite=(e)=>{

        e.preventDefault();
       let data={name,age}
        console.log(data);

        fetch('http://localhost:3000/user',
              {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
              } );
              alert ("submite")
    }
    
        

    

    return (
        <div className="card">
              
              <h1>Create</h1>
           <div className="form">

             <form action="" onSubmit={submite}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                <input type="text" value={age} onChange={(e)=>setage(e.target.value)} />
             <button type="submite">Submite</button>

             </form>
           </div>
           
           
        </div>
    );
}

export default Create;