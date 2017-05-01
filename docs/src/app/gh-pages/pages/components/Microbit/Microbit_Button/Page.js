import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../../CodeExample';
import PropTypeDescription from '../../../../PropTypeDescription';
import MarkdownElement from '../../../../MarkdownElement';
import MicroBitButtonText from './Microbit_Button.md';

const MicroBitButtonPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={MicroBitButtonText} />
  </div>
);

export default MicroBitButtonPage;
