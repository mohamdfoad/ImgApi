Project Documentation 

##Project Title and Description:
Image Processing API for Advanced Web Development Track course provided by Udacity offered by egFWD Initiative
The requirement is to create an API (Application Programming Interface) that takes the following parameters:
/**
* @param {string} filename
 * @param {number} width
 * @param {number} height
*/
then responds back with a resized image which most probably a thumbnail - after making a quick check on the cache contents for the same produced output- to immediately serve, else sharp kicks in and does its work using the resize method with  option �fit� set to �contain� that ignores the aspect ratio of the input and stretch both given dimensions.
The accepted range of width (min � max) : (75 -2200)
The allowed range of height (min � max): (75 � 2200)
The image list available (/masterimg/img):  �encenadaport�,� fjord�,� icelandwaterfall�,� palmtunnel�,� santamonica�)
Examples on how to use api : /api/img?filename=fjord&width=100&height=100
Other examples are shown using html static file with url : http://localhost/example.html resides in shared public dir.
Sharp module has been utilized (src/modules/sharpimging.ts) with resize option fit: contain

##Webserver technology used : Express that listens for get requests on port 80

##API Usage conditions:
 **API endpoint: localhost/api/img . listens to requests over port 80 the standard http protocol port.

The user can pass a specific image name, desired width and desired height considering the following
   1. filename: specific image Name to be processed that should comply to:
      - passed filename only, without any file extension.
      - the image must be in the image list available in folder (/masterimg/img):  (�encenadaport�,� fjord�,� icelandwaterfall�,� palmtunnel�,� santamonica�).
   2. width: desired width of the processed image, with some specifications:
      - width: passed must be a number between (75 , 2200)
   3. height: desired height of the processed image, with some specifications:
      - height: passed must be a number between (75 , 2200)
For example:
		/api/img?filename= encenadaport &width=100&height=100
		
		This request will return an image �encenadaport500800.jpg� as output.
##Middleware:
Using "express-validator" that checks the query string or the user's inputs and reacts with the bad requests; also protects the project crash from bad inputs. 
Other built-in middleware has been used that is express static which allows the web share of the public folder to give the access to resources used for 
example.html that gives an example with nice interface to test the API.

##Scripts/shortcuts ( package.json)
npm run build	  /*Starts typescript transpilation from .ts to .j files*/
npm run prettier    /*apply prettier style format to all source files*/
npm run lint	      /*to check source code for errors*/
npm run lintfix	      /*to check source code for errors with the fix option enabled*/
npm run start	       /*Starts the project in test environment*/
npm run start:prod	/*Starts the project for production environment*/
npm run test	       /*starts unit test*/

## Testing with jasmine unit test tool
  testing results were successful for a suit of response tests of different expected errors of inputs 
  8 test are all passed

##Environment: working under windows 11 with:
-Visual studio code Version 1.74.1
-nodeJs version: by Ps(power shell) command: node �v ? v18.12.1
-npm version : npm �v ? 8.19.2
-typescript installed : tsc �version ? Version 4.9.3

 

##Installation and dependencies: 
1-Installation of node js after being downloaded from official website the LTS version for production ; LTS stands for (long term support)
2-Installation of VSCode by Microsoft
3-Installation of npm: npm install
Dependencies: are divided into two main categories:
Production Dependencies
These packages can be found in the "dependencies� object inside the �package.json� file.

1-Express webserver framework.
2-Express validator Express middleware for the validator module.
3-Sharp High-performance Node.js image processor.

##Development Dependencies
These packages can be found in the �devDependencies� object inside the �package.json� file.
	- TypeScript is a language for application scale JavaScript development.
	- ts-node is TypeScript execution environment and REPL for node.js.
	- nodemon is  Simple monitor script for use during the development of a node.js app.
	-  Prettier is an opinionated code formatter.
	- eslint is an AST-based pattern checker for JavaScript.
	- eslint-config-prettier Turns off all rules that are unnecessary or might conflict with Prettier.
	- eslint-plugin-prettier Runs prettier as an eslint rule.
	- jasmine unit testing framework.
	- jasmine-spec-reporter is Spec reporter for jasmine behavior-driven development framework.
	- supertest is SuperAgent driven library for testing HTTP servers.
	- dotenv to Load environment variables from .env file

##Project Directory structure:
Masterimg |
		||images 
			||| encenadaport.jpg
			|||fjord.jpg
			|||icelandwaterfall.jpg
			|||palmtunnel.jpg
			|||santamonica.jpg	
		||thumbs
Public |
	     	||example.html
src |
		||index.ts
		||middlewares
			|||checkimgelemnts.ts
			|||validateurl.ts
		||modules
			|||sharpimging.ts
		||routes
			|||api
			||||imgresize.ts
			|||index.ts
		||tests
			|||checkcacheSpec.ts
			|||checkThumbSpec.ts
			|||imgSpec.ts
		||utils
			|||checkcache.ts
			|||checkthumb.ts
			|||ls-folder.ts
.eslintrc.json
.prettierignore
.prettierrc.json
package-lock.json
package.json
tsconfig.json

## the compiled output directory:
the project is configured to build all .js files and output to "dist" directory/folder

##code at runtime



npm run start

> api_imgproc@1.0.0 start
> nodemon src/index.ts

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
index Api reporting in
Please open http://localhost:80 to review the project ...
[nodemon] restarting due to changes...
[nodemon] starting `ts-node src/index.ts`
index Api reporting in
Please open http://localhost:80 to review the project ...
Asking sharp to resize image : fjord100100
returning a found thumb Immediately ...

****************Correction after reviewing********************************************************
Corrected prettier shortcut to run on code; Also corrected ".prettierrc" to UTF-8  encoding.

Added Direct sharp object test and passed successfuly.
****************************Console results*************************
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\Man1\Documents\API_imgProc> npm run prettier

> api_imgproc@1.0.0 prettier
> prettier --config .prettierrc src/**/*.ts --write

src\index.ts 433ms
src\middlewares\checkimgelemnts.ts 88ms
src\middlewares\validateurl.ts 0ms
src\modules\sharpimging.ts 0ms
src\routes\api\imgresize.ts 74ms
src\routes\index.ts 10ms
src\tests\checkcacheSpec.ts 27ms
src\tests\checkthumbSpec.ts 18ms
src\tests\helpers\reporter.ts 29ms
src\tests\imgSpec.ts 75ms
src\utils\checkcache.ts 24ms
src\utils\checkthumb.ts 11ms
src\utils\ls-folder.ts 39ms
PS C:\Users\Man1\Documents\API_imgProc>

PS C:\Users\Man1\Documents\API_imgProc> npm run test

> api_imgproc@1.0.0 test
> npm run build && npm run jasmine


> api_imgproc@1.0.0 build
> npx tsc


> api_imgproc@1.0.0 jasmine
> npx tsc && jasmine

index Api reporting in
Jasmine started

  Image Existence Suite
    √ checks the existence of a thumb that is surly exists in thumb folder image
    √ checks the existence of image

  Image Existence Suite
    √ checks the existence of a thumb that surly exists in thumb folder image
    √ checks the existence of image

Please open http://localhost:80 to review the project ...
Asking sharp to resize image : santamonica200500
  Image Resize Suite of tests
    √ gets /api/img http response after applying resize operation
Asking sharp to resize image : santamonica500500
    √ gets /api/img http response for different dimensions
{
  errors: [
    {
      value: 500000,
      msg: 'Image max-height is 2200',
      param: 'height',
      location: 'query'
    },
    {
      value: 20000,
      msg: 'Image max-width is 2200',
      param: 'width',
      location: 'query'
    }
  ]
}
    √ gets /api/img response if unsupported dimensions
{
  errors: [
    {
      value: 'file001',
      msg: 'Sorry, Your requested image not found! ',
      param: 'filename',
      location: 'query'
    }
  ]
}
    √ gets /api/img response for an image that does not exist
{
  errors: [
    {
      value: 'file001',
      msg: 'Sorry, Your requested image not found! ',
      param: 'filename',
      location: 'query'
    },
    {
      value: undefined,
      msg: 'Image width is Mandatory!',
      param: 'width',
      location: 'query'
    },
    {
      value: undefined,
      msg: 'Image width is Mandatory!',
      param: 'width',
      location: 'query'
    },
    {
      value: NaN,
      msg: ' Image Width is Mandatory numeric!',
      param: 'width',
      location: 'query'
    },
    {
      value: NaN,
      msg: 'Image min-width is 75',
      param: 'width',
      location: 'query'
    },
    {
      value: NaN,
      msg: 'Image max-width is 2200',
      param: 'width',
      location: 'query'
    }
  ]
}
    √ gets /api/img response fora request with missingwidth
{
  errors: [
    {
      value: 'file001',
      msg: 'Sorry, Your requested image not found! ',
      param: 'filename',
      location: 'query'
    },
    {
      value: undefined,
      msg: 'Image height is Mandatory!',
      param: 'height',
      location: 'query'
    },
    {
      value: undefined,
      msg: 'Image height is Mandatory!',
      param: 'height',
      location: 'query'
    },
    {
      value: NaN,
      msg: 'Image height is Mandatory numeric!',
      param: 'height',
      location: 'query'
    },
    {
      value: NaN,
      msg: 'Image min-height is 75',
      param: 'height',
      location: 'query'
    },
    {
      value: NaN,
      msg: 'Image max-height is 2200',
      param: 'height',
      location: 'query'
    },
    {
      value: undefined,
      msg: 'Image width is Mandatory!',
      param: 'width',
      location: 'query'
    },
    {
      value: undefined,
      msg: 'Image width is Mandatory!',
      param: 'width',
      location: 'query'
    },
    {
      value: NaN,
      msg: ' Image Width is Mandatory numeric!',
      param: 'width',
      location: 'query'
    },
    {
      value: NaN,
      msg: 'Image min-width is 75',
      param: 'width',
      location: 'query'
    },
    {
      value: NaN,
      msg: 'Image max-width is 2200',
      param: 'width',
      location: 'query'
    }
  ]
}
    √ gets /api/img response fora request with missing-width-height and messy

true
  Remove thumb test

    Remove thumb test
      √ removing Sharp Created file fjord100100.jpg inside thumbs folder

Executed 11 of 11 specs SUCCESS in 0.735 sec.
***********************************************EOF************************************************



