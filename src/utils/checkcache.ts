import fs from 'fs'

/**
 * @description Check whether an image exists in thumb folder.
 * @param {string} pathf  supposed to be thumb image not full image depite capability
 * @returns {boolean} flags whether an image exists or not.
 */

const checkThumbExists = (pathf: string): boolean => {
  let flag = false
  if (fs.existsSync(pathf)) {
    flag = true
  }
  return flag
}
// method to remove file after getting its path
// const deletefile =  (pathf:string) : boolean =>{
//   let flag = false;
//   fs.unlink(pathf, function(err) {
//     if(err) {
//         // file doens't exist
//        flag =false;
//     }else {
//         flag = true;
//     }
// });
// return flag;
// }

//  const checkThumbExists = (pathf:string):boolean  =>{
//      let flag : boolean = false;
//      fs.access(pathf , 1 , (err:unknown,data:unknown) =>{
// if (err){
//    flag=false;
//    console.log(data);
//    console.log(err);
// };

//      });

//      return flag;

// };
// const AbsoluteThumbPath = path.resolve (__dirname + '../../../masterimg/thumb/encenadaport100100.jpg');
// checkThumbExists(AbsoluteThumbPath) ;

export default checkThumbExists
