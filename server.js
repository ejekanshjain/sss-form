const express = require('express')

const app = express()
app.use(express.static('public'))

app.listen(process.env.PORT || 5000, () => console.log(`Server Started on port ${process.env.PORT || 5000}...`))