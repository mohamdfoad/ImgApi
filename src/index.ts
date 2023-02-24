import express from 'express'
import routes from './routes/index'

const app = express()
const port = 80 // using http standard/default port

// Start server
app.listen(port, async (): Promise<void> => {
  const url = `http://localhost:${port}`
  console.log(`Please open ${url} to review the project ...`)
  app.use(express.static('public')) //calling the builtin middleware to share public folder
})
app.use('/api', routes)
app.get('/', (req, res) => {
  res.redirect('/api') // Auto redirect the home dir to api dir that would render some helping guide on how tos!
})
export default app
