import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101ButtonText from './Arduino101Button.md';

const Arduino101ButtonPage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101ButtonText} />
  </div>
);

export default Arduino101ButtonPage;
