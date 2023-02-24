import { query } from 'express-validator'
import folderContents from '../utils/ls-folder'

/**
 * @description Check Image elemnts before calling sharp.
 * @refrence documentation https://express-validator.github.io/docs/check-api.html and https://express-validator.github.io/docs/validation-chain-api.html
 * @returns checkImgElements for validating image elemnts name, height , width
 */
//validation chain on req.query against passed image elemnts name, height , width
const checkImgElements = [
  // (filename) parameter validation:
  query('filename')
    .exists()
    .withMessage('Image name is Mandatory!') // to be used with its previous validator
    .notEmpty()
    .withMessage('Image name can not be empty')
    .isIn(folderContents('../../masterimg/img'))
    .withMessage('Sorry, Your requested image not found! '),
  // (height) parameter validation:
  query('height')
    .exists()
    .withMessage('Image height is Mandatory!')
    .notEmpty()
    .withMessage('Image height is Mandatory!')
    .toInt()
    .isNumeric()
    .withMessage('Image height is Mandatory numeric!')
    .isInt({ min: 75 })
    .withMessage('Image min-height is 75')
    .isInt({ max: 2200 })
    .withMessage('Image max-height is 2200'),
  // (width) parameter validation:
  query('width')
    .exists()
    .withMessage('Image width is Mandatory!')
    .notEmpty()
    .withMessage('Image width is Mandatory!')
    .toInt()
    .isNumeric()
    .withMessage(' Image Width is Mandatory numeric!')
    .isInt({ min: 75 })
    .withMessage('Image min-width is 75')
    .isInt({ max: 2200 })
    .withMessage('Image max-width is 2200'),
]

export default checkImgElements
