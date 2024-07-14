import fairImage from '../assets/images/fair.png';
import lightImage from '../assets/images/light.png';
import mediumImage from '../assets/images/medium.png';
import tanImage from '../assets/images/tan.png';
import oliveImage from '../assets/images/olive.png';
// import darkImage from '../assets/images/dark.png';
// import deepImage from '../assets/images/deep.png';
// import brunetteImage from '../assets/images/brunette.png';
// import darkBrownImage from '../assets/images/dark_brown.png';
// import redHairImage from '../assets/images/red.png';
// import softBlackImage from '../assets/images/soft_black.png';
// import jetBlackImage from '../assets/images/jet_black.png';
// import blackEyeImage from '../assets/images/black_eye.png';
// import darkBrownEyeImage from '../assets/images/dark_brown_eye.png';
// import goldenEyeImage from '../assets/images/golden_eye.png';
// import hazelEyeImage from '../assets/images/hazel_eye.png';
// import greenEyeImage from '../assets/images/green_eye.png';
// import blueEyeImage from '../assets/images/blue_eye.png';
// import greyEyeImage from '../assets/images/grey_eye.png';
// import pinkBlushImage from '../assets/images/pink_blush.png';
// import peachBlushImage from '../assets/images/peach_blush.png';
// import redBlushImage from '../assets/images/red_blush.png';
// import blueVeinImage from '../assets/images/blue_vein.png';
// import greenVeinImage from '../assets/images/green_vein.png';
// import blueGreenVeinImage from '../assets/images/blue_green_vein.png';

const questionsData = [
    {
      id: 1,
      question: 'Which skin tone best describes you ? ',
      options: [
        { id: 1, text: 'Fair', imageUrl: '../assets/images/fair.png' },
        { id: 2, text: 'Light', imageUrl: '../assets/images/light.png' },
        { id: 3, text: 'Medium', imageUrl: '../assets/images/medium.png' },
        { id: 4, text: 'Tan', imageUrl: '../assets/images/tan.png' },
        { id: 5, text: 'Olive', imageUrl: '../assets/images/olive.png' },
    //     { id: 1, text: 'Fair', imageUrl: fairImage },
    //   { id: 2, text: 'Light', imageUrl: lightImage },
    //   { id: 3, text: 'Medium', imageUrl: mediumImage },
    //   { id: 4, text: 'Tan', imageUrl: tanImage },
    //   { id: 5, text: 'Olive', imageUrl: oliveImage },
        { id: 6, text: 'Dark', imageUrl: '../assets/images/dark.png' },
        { id: 7, text: 'Deep', imageUrl: '../assets/images/deep.png' }
      ]
    },
    {
      id: 2,
      question: 'Please select your current hair color . ',
      options: [
        { id: 1, text: 'Brunette', imageUrl: '../assets/images/brunette.png' },
        { id: 2, text: 'Dark Brown', imageUrl: '../assets/images/dark_brown.png' },
        { id: 3, text: 'Red', imageUrl: '../assets/images/red.png' },
        { id: 4, text: 'Soft Black', imageUrl: '../assets/images/soft_black.png' },
        { id: 5, text: 'Jet Black', imageUrl: '../assets/images/jet_black.png' }
      ]
    },
    {
      id: 3,
      question: 'What eye color do you have ? ',
      options: [
        { id: 1, text: 'Black', imageUrl: '../assets/images/black_eye.png' },
        { id: 2, text: 'Dark Brown', imageUrl: '../assets/images/dark_brown_eye.png' },
        { id: 3, text: 'Golden', imageUrl: '../assets/images/golden_eye.png' },
        { id: 4, text: 'Hazel', imageUrl: '../assets/images/hazel_eye.png' },
        { id: 5, text: 'Green', imageUrl: '../assets/images/green_eye.png' },
        { id: 6, text: 'Blue', imageUrl: '../assets/images/blue_eye.png' },
        { id: 7, text: 'Grey', imageUrl: '../assets/images/grey_eye.png' }
      ]
    },
    {
      id: 4,
      question: 'Which blush color do you naturally have ? ',
      options: [
        { id: 1, text: 'Pink', imageUrl: '../assets/images/pink_blush.png' },
        { id: 2, text: 'Peach', imageUrl: '../assets/images/peach_blush.png' },
        { id: 3, text: 'Red', imageUrl: '../assets/images/red_blush.png' }
      ]
    },
    {
      id: 5,
      question: 'What is the color of your veins ? ',
      options: [
        { id: 1, text: 'Blue', imageUrl: '../assets/images/blue_vein.png' },
        { id: 2, text: 'Green', imageUrl: '../assets/images/green_vein.png' },
        { id: 3, text: 'Blue-Green', imageUrl: '../assets/images/blue_green_vein.png' }
      ]
    }
  ];
  export default questionsData;
