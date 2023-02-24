import express, { Request, Response } from 'express'
import path from 'path'
import validateQueryString from '../../middlewares/validateurl' //express validator to validate query string before I go
import checkImgElements from '../../middlewares/checkimgelemnts' // check resize params out of querystring before calling sharp object
//import checkImagecache from '../../utils/checkthumb'
import sharpImageResize from '../../modules/sharpimging'
import readfile from '../../utils/checkcache'

// create an express router:
const img = express.Router()

//let's listen to the get method of http req via two middlewares
img.get(
  '/',
  checkImgElements,
  validateQueryString,
  async (req: Request, res: Response): Promise<void> => {
    //console.log('route img-resize has been called');

    // set the desired parameters:
    const fileName: string = req.query.filename as unknown as string
    const width: number = req.query.width as unknown as number
    const height: number = req.query.height as unknown as number
    //console.log(`${fileName + width + height}`);
    // construct the thumb filename:
    //const newFileName = fileName + '-thumb';
    const filenameWithExt = fileName + width + height + '.jpg'
    const filenameNoExt = fileName + width + height
    const absoluteThumbPath = path.resolve(
      __dirname + `../../../../masterimg/thumb/${filenameWithExt}`
    )

    // check /out directory existence:
    //checkfolderExistence('../../masterimg/thumb');

    // check if thumb exists
    //const thumbExists: boolean = checkImagecache('../../masterimg/thumb',fileName )
    const thumbExists = readfile(absoluteThumbPath) //checkImagecache('../../masterimg/thumb',filenameNoExt);
    if (thumbExists) {
      // exists... Serve Immediatley ...
      console.log('returning a found thumb Immediately ...' + absoluteThumbPath)
    } else {
      // doesnot exist then let's call sharp for help.
      console.log(`Asking sharp to resize image : ${filenameNoExt}`)
      await sharpImageResize(fileName, width, height, filenameNoExt)
    }

    // respond with the result:
    res.sendFile(absoluteThumbPath)
  }
)

// process GET requests for '/resize' route:

export default img
