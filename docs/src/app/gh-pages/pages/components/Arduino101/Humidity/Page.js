import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101HumidityText from './Arduino101Humidity.md';

const Arduino101HumidityPage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101HumidityText} />
  </div>
);

export default Arduino101HumidityPage;
