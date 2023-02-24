import checkIfThumbExists from '../utils/checkthumb'

describe('Image Existence Suite', () => {
  it('checks the existence of a thumb that surly exists in thumb folder image', () => {
    const isThumbexist: boolean = checkIfThumbExists(
      '../../masterimg/thumb',
      'santamonica100100' //without extensions as it lists thumbfolder supposing all jpg
    )
    expect(isThumbexist).toBeTruthy()
  })

  it('checks the existence of image', () => {
    const isThumbexist: boolean = checkIfThumbExists(
      '../../masterimg/thumb',
      'ayfilename'
    )
    expect(isThumbexist).toBeFalsy()
  })
})
