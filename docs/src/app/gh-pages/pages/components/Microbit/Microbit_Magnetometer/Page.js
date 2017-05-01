import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../../CodeExample';
import PropTypeDescription from '../../../../PropTypeDescription';
import MarkdownElement from '../../../../MarkdownElement';
import microbitMagnetometerText from './Microbit_Magnetometer.md';

const MicroBitMagnetometerPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={microbitMagnetometerText} />
  </div>
);

export default MicroBitMagnetometerPage;
