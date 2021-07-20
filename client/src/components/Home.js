import React, {useState} from 'react'
import CreateProduct from "./CreateProduct"
import ListProduct from "./ListProduct"

const Home = props => {

    const [submitState, setSubmitState] = useState(false)

    return(
        <div>
            <CreateProduct submitState={submitState} setSubmitState={setSubmitState} />
            <ListProduct submitState={submitState} setSubmitState={setSubmitState} />
        </div>
    )
}
export default Home