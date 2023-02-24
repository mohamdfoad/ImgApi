import express from 'express'
import img from './api/imgresize'

const routes: express.Router = express.Router()
routes.use('/img', img)
console.log('index Api reporting in')

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    `<h4 style="color:#cdcdcd;margin-left:30%;"><img src='udacity.png' alt='Udacity Logo'/>Udacity Image Resize API Project</h1><p>use api url <a href="/api/img">/api/img</a>&nbsp; file Name, width and height are all required</p><p>API calling Examples:<a href="/api/img?filename=santamonica&width=100&height=100">/api/img?filename=santamonica&width=100&height=100</a><br/><a href="/api/img?filename=fjord&width=100&height=100">/api/img?filename=fjord&width=100&height=100</a></p><br><h4>OR visit link <a href="/example.html">see examples page</a></h4>`
  )
})

export default routes
