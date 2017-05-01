import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101MoistureText from './Arduino101Moisture.md';

const Arduino101MoisturePage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101MoistureText} />
  </div>
);

export default Arduino101MoisturePage;
