import { useRef, useState } from "react";

const NoControlado = () => {

    const form = useRef(null) // aun no esta renderizado nuestro formulario
    const[error, setError] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setError('')

        // capturar los datos
        /*
        console.log(form.current)
        console.log(new FormData(form.current)) //=> js
        */
       const data = new FormData(form.current)
       // spread opeators: permite a un elemento iterable ser expandido
       //copia cada uno de sus elementos
       console.log([...data.entries()]); //todo lo que esta en su interior va a pasar a un iterable
       
       //const dataObject = Object.fromEntries([...data.entries()])
       const {title,description,state } = Object.fromEntries([...data.entries()])
       //console.log(dataObject)
       console.log(title,description,state )

       //validar los datos

       //if(!title.trim()) return console.log("Llena este campo");
       if(!title.trim() || !description.trim() || !state.trim()) return setError ("Llena todos los campos");
    }

    /**
    document.addEventListener('submit' , (evento) => {
        evento.preventDefault()
    })
    */
    return (
        <form onSubmit = {handleSubmit} ref={form}>
            <input 
                type = "text"
                placeholder="Ingrese Todo"
                className="form-control mb-2"
                name="title"
                defaultValue="todo #01"
            />

            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="description"
                defaultValue= "descripcion #01"
            />
            <select className="form-select mb-2" name="state" defaultValue="completado">
                <option value = "pendiente" >Pendiente</option>
                <option value = "completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary"> Procesar</button>
            {
                error !== "" && error 
            }
        </form>
    )
}

export default NoControlado