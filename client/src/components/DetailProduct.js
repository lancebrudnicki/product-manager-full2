
import React, {useEffect, useState} from "react"
import axios from 'axios'

const DetailProduct = props => {

    const {product_id} = props

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${product_id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <h1>{product.desc}</h1>
        </div>
    )
}
export default DetailProduct