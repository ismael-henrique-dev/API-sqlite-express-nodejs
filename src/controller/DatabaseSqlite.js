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

  async updateProduct(id, product) {
    const db = await openDb()

    const { name, price, description } = product

    await db.run(
      `UPDATE Products SET name=?, price=?, description=? WHERE id=?`,
      [name, price, description, id]
    )
  }

  async deleteProduct(id) {
    const db = await openDb()

    await db.run("DELETE FROM Products WHERE id=?", [id])
  }

  async deleteTable() {
    const db = await openDb()
    await db.exec("drop table if exists Products")
  }
}
