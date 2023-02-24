import path from 'path'
import checkcache from '../utils/checkcache'

const absoluteThumbPath = path.resolve(
  __dirname + `../../../masterimg/thumb/santamonica100100.jpg`
)

describe('Image Existence Suite', () => {
  it('checks the existence of a thumb that is surly exists in thumb folder image', () => {
    const isThumbexist: boolean = checkcache(absoluteThumbPath)

    expect(isThumbexist).toBeTruthy()
  })

  it('checks the existence of image', () => {
    const isThumbexist: boolean = checkcache(
      '../../masterimg/thumb' + 'ayfilename.anyext'
    )

    expect(isThumbexist).toBeFalsy()
  })
})
