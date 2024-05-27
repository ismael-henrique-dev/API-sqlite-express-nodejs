import express from "express"
import { DatabaseSqlite } from "./controller/DatabaseSqlite.js"

const server = express()

const port = 3333

server.use(express.json())

const database = new DatabaseSqlite()
//read
server.get("/", async (req, res) => {
  const products = await database.listProducts()

  res.json(products)

  return products
})

//Create
server.post("/", async (req, res) => {
  const { name, price, description } = req.body

  await database.createProduct({
    name: name,
    price: price,
    description: description,
  })

  res.status(201).send("Product created successfully.")
})

//Update
server.put("/:id", async (req, res) => {
  const videoId = req.params.id

  const { name, price, description } = req.body

  await database.updateProduct(videoId, {
    name: name,
    price: price,
    description: description,
  })

  res.status(204).send("Product updated seccessfuççy.")
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
