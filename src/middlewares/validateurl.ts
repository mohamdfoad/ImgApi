import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator' //Extracts the validation errors from a request and makes them available in a Result object

/**
 * @description Validate request query.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns validateQueryString
 */

//request , response , and next() means this is a middleware ; next() hands over to next middleware.
const validateQueryString = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = validationResult(req)
  const hasErrors = !result.isEmpty()
  if (hasErrors) {
    // if there is any error let's take action
    console.log({ errors: result.array() })
    return res
      .status(400) // means bad request
      .send(
        'Bad request: please refer to /api for more on how to pass parameters.'
      )
  }

  next()
}
export default validateQueryString
