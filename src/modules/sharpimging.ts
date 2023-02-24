import path from 'path'
import sharp, { ResizeOptions } from 'sharp'

/**
 * @description Instantiates sharp module and imports resize options; takes below parameters and boom resizing an image to output file => imagename+width+height.jpg .
 * @param {string} fileName
 * @param {number} width
 * @param {number} height
 * @param {string} outputfile
 *
 */

//using Async and Promise with sharp
const sharpImageResize = async (
  fileName: string,
  width: number,
  height: number,
  outputfile: string
): Promise<void> => {
  // set used images path:
  const fullImagePath: string = path.resolve(
    `${__dirname}/../../masterimg/img/${fileName}.jpg`
  )
  const outputImagePath: string = path.resolve(
    `${__dirname}/../../masterimg/thumb/${outputfile}.jpg`
  )

  // set sharp processing fit option:{cover*,contain,fill,inside,outside}
  const processingOptions: ResizeOptions = {
    fit: 'contain', //Ignore the aspect ratio of the input and stretch to both provided dimensions.
  }

  // apply resize operation:

  await sharp(fullImagePath)
    .resize(width, height, processingOptions)
    .toFile(outputImagePath)
}

export default sharpImageResize
