import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import MicrobitAccelerometerText from './Microbit_Accelerometer.md';

const MicroBitAccelerometerPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={MicrobitAccelerometerText} />
  </div>
);

export default MicroBitAccelerometerPage;
