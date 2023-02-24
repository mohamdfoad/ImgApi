import supertest from 'supertest'
import app from '../index'

//const request = supertest(img);
const req = supertest(app)
//endpoint variety of tests

describe('Image Resize Suite of tests', () => {
  it('gets /api/img http response after applying resize operation', async () => {
    const res = await req.get(
      '/api/img?filename=santamonica&width=200&height=500'
    )
    expect(res.status).toBe(200)
  })

  it('gets /api/img http response for different dimensions', async () => {
    const res = await req.get(
      '/api/img?filename=santamonica&width=500&height=500'
    )
    expect(res.status).toBe(200)
  })

  it('gets /api/img response if unsupported dimensions', async () => {
    const res = await req.get(
      '/api/img?filename=icelandwaterfall&width=20000&height=500000'
    )
    expect(res.status).toBe(400)
  })

  it('gets /api/img response for an image that does not exist', async () => {
    const res = await req.get('/api/img?filename=file001&width=100&height=100')
    expect(res.status).toBe(400)
  })

  it('gets /api/img response fora request with missingwidth', async () => {
    const res = await req.get('/api/img?filename=file001&height=100')
    expect(res.status).toBe(400)
  })

  it('gets /api/img response fora request with missing-width-height and messy', async () => {
    const res = await req.get('/api/img?filename=file001&')
    expect(res.status).toBe(400)
  })
})
