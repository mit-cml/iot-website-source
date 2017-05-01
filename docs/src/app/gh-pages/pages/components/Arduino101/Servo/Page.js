import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101ServoText from './Arduino101Servo.md';

const Arduino101ServoPage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101ServoText} />
  </div>
);

export default Arduino101ServoPage;
