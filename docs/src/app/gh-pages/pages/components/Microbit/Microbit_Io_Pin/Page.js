import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../../CodeExample';
import PropTypeDescription from '../../../../PropTypeDescription';
import MarkdownElement from '../../../../MarkdownElement';
import microbitIoPinText from './Microbit_Io_Pin.md';

const MicroBitIoPinPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={microbitIoPinText} />
  </div>
);

export default MicroBitIoPinPage;
