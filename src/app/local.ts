import app from './app'

const port = process.env.HTTP_PORT || 3000

app.listen(port, () => {
  console.info(`Express server running at http://0.0.0.0:${port}/`)
})
