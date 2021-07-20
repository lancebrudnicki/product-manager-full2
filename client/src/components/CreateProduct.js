import React, {useState} from "react"
import axios from "axios"

const CreateProduct = props => {

    const {submitState, setSubmitState} = props

    const [formState, setFormState] = useState({
        title:"",
        price : 1,
        desc: ""
    })

    const [validState, setValidState] = useState({})



    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }



    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product", formState)
            .then(res => {
                setFormState({
                    title:"",
                    price : 1,
                    desc: ""
                })
                setSubmitState(!submitState)
            })
            .catch(err => {
                // console.log(err.response.data)
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }



    return(
        <div>
            <h1>Create</h1>
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
                    Descriptions:
                    <input type="text" name="desc" id="" value={formState.desc} onChange={changeHandler} />
                    {(validState.desc) ? <p>{validState.desc}</p>: null}
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default CreateProduct