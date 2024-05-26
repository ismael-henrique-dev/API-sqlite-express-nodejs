import { openDb } from "../configDb.js"
import { randomUUID } from "node:crypto"

export class DatabaseSqlite {

  async createTable() {
    const db = await openDb()
    await db.exec(
      "CREATE TABLE IF NOT EXISTS Products (id TEXT PRIMARY KEY, name TEXT, price INTEGER, description TEXT)"
    )
  }

  async listProducts() {
    const db = await openDb()
    const Products = await db.all("SELECT * FROM Products")
    return Products
  }

  async createProduct(product) {
    const db = await openDb()
    const productId = randomUUID()
    const { name, price, description } = product

    await db.run(
      `INSERT INTO Products (id, name, price, description) VALUES (?, ?, ?, ?)`,
      [productId, name, price, description]
    )
  }

  async deleteTable() {
    const db = await openDb()
    await db.exec("drop table if exists Products")
  }
}
