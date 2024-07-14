import fairImage from '../assets/images/fair.png';
import lightImage from '../assets/images/light.png';
import mediumImage from '../assets/images/medium.png';
import tanImage from '../assets/images/tan.png';
import oliveImage from '../assets/images/olive.png';
import darkImage from '../assets/images/dark.png';
import deepImage from '../assets/images/deep.png';
import darkBrownImage from '../assets/images/dark_brown.png';
import chocoRedHairImage from '../assets/images/choco_red.png';
import softBlackImage from '../assets/images/soft_black.png';
import jetBlackImage from '../assets/images/jet_black.png';
import blackEyeImage from '../assets/images/black_eye.png';
import darkBrownEyeImage from '../assets/images/dark_brown_eye.png';
import honeyEyeImage from '../assets/images/honey_eye.png';
import hazelEyeImage from '../assets/images/hazel_eye.png';
import greenEyeImage from '../assets/images/green_eye.png';
import blueEyeImage from '../assets/images/blue_eye.png';
import greyEyeImage from '../assets/images/grey_eye.png';
import pinkBlushImage from '../assets/images/pink_blush.png';
import peachBlushImage from '../assets/images/peach_blush.png';
import redBlushImage from '../assets/images/red_blush.png';
import noneImage from '../assets/images/none_blush.png';
import bluePurpleVeinImage from '../assets/images/blue_purple.png';
import greenOliveVeinImage from '../assets/images/green_olive.png';
import blueGreenVeinImage from '../assets/images/blue_green.png';

const questionsData = [
    {
      id: 1,
      question: 'Which skin tone best describes you ? ',
      options: [
        { id: 1, text: 'Fair', imageUrl: fairImage },
        { id: 2, text: 'Light', imageUrl: lightImage },
        { id: 3, text: 'Medium', imageUrl: mediumImage },
        { id: 4, text: 'Tan', imageUrl: tanImage },
        { id: 5, text: 'Olive', imageUrl: oliveImage },
        { id: 6, text: 'Dark', imageUrl: darkImage },
        { id: 7, text: 'Deep', imageUrl: deepImage }
        ]
    },
    {
      id: 2,
      question: 'Please select your current hair color . ',
      options: [
        { id: 2, text: 'Dark Brown', imageUrl: darkBrownImage },
        { id: 3, text: 'Chocolate Red', imageUrl: chocoRedHairImage },
        { id: 4, text: 'Soft Black', imageUrl: softBlackImage },
        { id: 5, text: 'Jet Black', imageUrl: jetBlackImage }
        ]
    },
    {
      id: 3,
      question: 'What eye color do you have ? ',
      options: [
        { id: 1, text: 'Black', imageUrl: blackEyeImage },
        { id: 2, text: 'Dark Brown', imageUrl: darkBrownEyeImage },
        { id: 3, text: 'Golden', imageUrl: honeyEyeImage },
        { id: 4, text: 'Hazel', imageUrl: hazelEyeImage },
        { id: 5, text: 'Green', imageUrl: greenEyeImage },
        { id: 6, text: 'Blue', imageUrl: blueEyeImage },
        { id: 7, text: 'Grey', imageUrl: greyEyeImage }
      ]
    },
    {
      id: 4,
      question: 'Which blush color do you naturally have ? ',
      options: [
        { id: 1, text: 'Pink', imageUrl: pinkBlushImage },
        { id: 2, text: 'Peach', imageUrl: peachBlushImage },
        { id: 3, text: 'Red', imageUrl: redBlushImage },
        { id: 4, text: 'None', imageUrl: noneImage }
      ]
    },
    {
      id: 5,
      question: 'What is the color of your veins ? ',
      options: [
        { id: 1, text: 'Blue-Purple', imageUrl: bluePurpleVeinImage },
        { id: 2, text: 'Green-Olive', imageUrl: greenOliveVeinImage },
        { id: 3, text: 'Blue-Green', imageUrl: blueGreenVeinImage }
      ]
    }
  ];
  export default questionsData;
