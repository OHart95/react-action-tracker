const express = require('express')
const cors = require('cors')

const actionsRoutes = require('./routes/actions')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/api/actions', actionsRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})