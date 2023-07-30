const google = require("googleapis")
require("dotenv").config()

const CLIENT_EMAIL = process.env.CLIENT_EMAIL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const SHEET_ID = process.env.SHEET_ID

const client = new google.Auth.JWT(CLIENT_EMAIL, null, PRIVATE_KEY, ["https://www.googleapis.com/auth/spreadsheets"])

const sheet = google.google.sheets({version: "v4", auth: client})

module.exports = sheet