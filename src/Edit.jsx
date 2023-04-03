import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {


    let { id } = useParams()
    console.log(id)


    let [name, setname] = useState('');
    let age = useRef()

    useEffect(() => {
        fetch(`http://localhost:3000/user/${id}`)
            .then(res => res.json())
            .then((data) => {
                setname(data.name)
                age.current.value = data.age;

            })

    }, [])


    let sub = (e) => {
        e.preventDefault()
        let data={
            
            name:name,
            age: age.current.value
        }
        
        fetch(`http://localhost:3000/user/${id}`,

            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }


        )
        alert('success')

    }

    return (
        <div className="edit">
            <h1> Edite :{id}</h1>

            <form action="" onSubmit={sub} >

                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
                <input type="text"  ref={age} />
                <button type="submit"> Edited</button>
            </form>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />

            <h1>{name}</h1>

        </div>
    );
}

export default Edit;
