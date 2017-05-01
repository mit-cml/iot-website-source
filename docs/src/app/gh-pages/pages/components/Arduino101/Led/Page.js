import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101LedText from './Arduino101Led.md';

const Arduino101LedPage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101LedText} />
  </div>
);

export default Arduino101LedPage;
