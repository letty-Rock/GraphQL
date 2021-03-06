import { createServer, request } from 'http'
const server = createServer((request, response) => {
  switch (request.url) {
    case '/status': {
      response.writeHead(200)
      response.write('Okay')
      response.end()
      break
    }
    default: {
      response.writeHead(404, 'Service not found. ')
      response.end()
    }
  }
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000
const HOSTNAME = process.env.HOSTNAME ? process.env.HOSTNAME : 'localhost'
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at ${HOSTNAME}:${PORT}`)
})
