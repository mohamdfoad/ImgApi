import folderImages from './ls-folder'

/**
 * @description Check whether an image thumb or even full-image exists in specific directory or not.
 * @param {string} imagesFolder
 * @param {string} imageName  supposed to be thumb image not full image depite capability
 * @returns {boolean} flags whether an image exists or not.
 */
const checkThumbCache = (imagesFolder: string, imageName: string): boolean => {
  // status of the image:
  let existsflag = false

  // Try to Get ALL images names from specific directory:
  const imagesNamesList: string[] = folderImages(imagesFolder)

  // check against image name within the Image list in folder:
  for (let i = 0; i < imagesNamesList.length; i++) {
    if (imagesNamesList[i] === imageName) {
      existsflag = true
      break
    }
  }

  return existsflag
}

export default checkThumbCache
