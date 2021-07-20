const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

require("./server/config/mongoose.config")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))


const productRoutes = require("./server/routes/product.routes")
productRoutes(app)

app.listen(port, () => console.log(`EXPRESS LISTENING ON ${port} WE HOPE THIS WORKS`))