const express = require ('express')
const app = express()
require('dotenv').config();
const CategoryRouter = require('./api/category/router')
const UserRouter = require('./api/user/Router')
const BrandRouter = require('./api/Brands/Router')
const ProductRouter = require('./api/Products/Router')
const MailRouter = require('./api/mailer/Router')
const OrderRouter = require('./api/orders/Router')


const cors = require('cors')
const port = process.env.SERVER_PORT || 2000

app.use(express.json())

app.use(
  cors({
    origin: ["http://localhost:5175"],
    credentials: true
  }

))

app.use('/api', CategoryRouter)
app.use('/api', UserRouter)
app.use('/api', ProductRouter)
app.use('/api', BrandRouter)
app.use('/api', MailRouter)
app.use('/api', OrderRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})