import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101GyroscopeText from './Arduino101Gyroscope.md';

const Arduino101GyroscopePage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101GyroscopeText} />
  </div>
);

export default Arduino101GyroscopePage;
