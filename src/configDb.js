import sqlite3 from "sqlite3"
import { open } from "sqlite"
import "dotenv/config"

// you would have to import / invoke this in another file
export async function openDb() {
  return open({
    filename: process.env.DATABASE_URL,
    driver: sqlite3.Database,
  })
}
