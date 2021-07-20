import React, {useState, useEffect} from "react"
import {navigate} from "@reach/router"
import axios from "axios"

const EditProduct = props => {

    const {product_id} = props

    const [formState, setFormState] = useState({
        title:"",
        price : 1,
        desc: ""
    })

    const [validState, setValidState] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${product_id}`)
            .then(res => setFormState(res.data))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/product/"+ product_id, formState)
            .then(res => navigate(`/${product_id}`))
            .catch(err => {
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/${product_id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Edit</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" id="" value={formState.title} onChange={changeHandler} />
                    {(validState.title) ? <p>{validState.title}</p>: null}
                </p>
                <p>
                    Price:
                    <input type="number" defaultValue={0} name="price" id="" value={formState.price} onChange={changeHandler} />
                    {(validState.price) ? <p>{validState.price}</p>: null}

                </p>
                <p>
                    Description:
                    <input type="text" name="desc" id="" value={formState.desc} onChange={changeHandler} />
                    {(validState.desc) ? <p>{validState.desc}</p>: null}

                </p>
                <button type="submit">Update</button>
            </form>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}
export default EditProduct