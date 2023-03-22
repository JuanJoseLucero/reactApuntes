import { useState } from "react"

const Controlado = () => {

    /*
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [state,setState] = useState('pendiente')
    */

    const [todo,setTodo] = useState({
        title: 'Todo #01',
        description: 'Descripcion #01',
        state: 'pendiente',
        priority: true
    })

    const {title, description,state, priority} = todo

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title, description, state)
    }

    const handleChange = (e) => {
        //console.log(e.target.value)
        //console.log(e.target.name)
        //(e) => setTodo({...todo, title: e.target.value})
        //onChange={e => setTodo({...todo, priority: e.target.checked})}
        const{name, type,checked,value} = e.target

        setTodo({
            ...todo,
            [name]: type ==='checkbox'? checked : value
        })
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                placeholder="Ingrese Todo"
                className="form-control mb-2"
                name="title"
                value={title}
                //onChange={e => setTitle(e.target.value)}
                onChange={handleChange}
            />

            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="description"
                value={description}
                //onChange={e => setDescription(e.target.value)}
                onChange={handleChange}
            />

            <div className="form-check mb-2"> 
                <input type="checkbox" name = "priority" className = "form-check-input" id="inputCheck" 
                checked={priority}
                onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>

            <select className="form-select mb-2" name="state" value = {state} 
                //onChange={e => setState(e.target.value)}
                onChange = {handleChange}>
                <option value = "pendiente" >Pendiente</option>
                <option value = "completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary"> Procesar</button>
        </form>
    )
}

export default Controlado