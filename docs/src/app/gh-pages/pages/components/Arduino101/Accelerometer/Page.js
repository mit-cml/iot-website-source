import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101AccelerometerText from './Arduino101Accelerometer.md';

const Arduino101AccelerometerPage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101AccelerometerText} />
  </div>
);

export default Arduino101AccelerometerPage;
