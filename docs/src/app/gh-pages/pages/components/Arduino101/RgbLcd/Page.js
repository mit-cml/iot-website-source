import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101RgbLcdText from './Arduino101RgbLcd.md';

const Arduino101RgbLcdPage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101RgbLcdText} />
  </div>
);

export default Arduino101RgbLcdPage;
