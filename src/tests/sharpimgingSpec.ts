import sharpImgingTest from '../modules/sharpimging'
import thumbremoveTest from '../utils/rmvFile'

// Unit Test for Sharp Object directly to generate the output file and also tests delete utility
//intended file is "fjord100100.jpg" in thumbs folder 
 

describe('Remove thumb test', () => {
  beforeAll(function () {

    sharpImgingTest('fjord', 100, 100, 'fjord100100'); // Time to call sharp to create the desired test thumb
});

 
  describe('Remove thumb test', () => {
  it('removing Sharp Created file fjord100100.jpg inside thumbs folder', () => {
     const isThumbexist: boolean = thumbremoveTest('fjord100100.jpg');
    expect(isThumbexist).toBeTruthy(); // Let's delete what sharp has ceated! Must be truthy result = thumb file deleted as expected
 
  });});
 
});




