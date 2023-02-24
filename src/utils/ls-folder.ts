import fs from 'fs'
import path from 'path'
/**
 * @description lists folder file contents.
 * @param {string} thumbfolder
 * @returns {string[]} returns Array of list of thumb folder contents to check with querystring file required.
 */

const folderContents = (thumbfolder: string): string[] => {
  // construct the full path of the desired directory using path.join() method:
  const fullPath: string = path.join(__dirname, thumbfolder)

  // read specific directory to extract its inner files:
  const dirimages = fs.readdirSync(fullPath)

  // remove file extension from file names using path.parse() method:
  for (let i = 0; i < dirimages.length; i++) {
    dirimages[i] = path.parse(dirimages[i]).name
  }

  return dirimages
}

export default folderContents
