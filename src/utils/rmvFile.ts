import path = require('path')
import fs = require('fs')

/**
 * @description removes passed thumb from disk thumb folder.
 * @param {string} thumb  thumb file name including .jpg
 * @returns {boolean} flags whether true = file removed or false= error occurred.
 */

const deletefile = (thumb: string): boolean => {
  let Dflag = false
  if (
    fs.existsSync(path.resolve(__dirname + '../../../masterimg/thumb/' + thumb))
  ) {
    fs.unlinkSync(path.resolve(__dirname + '../../../masterimg/thumb/' + thumb))
    Dflag = true
  } else {
    Dflag = false
  }
  console.log(Dflag)
  return Dflag
}

export default deletefile
