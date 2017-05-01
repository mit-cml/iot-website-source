import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../../CodeExample';
import PropTypeDescription from '../../../../PropTypeDescription';
import MarkdownElement from '../../../../MarkdownElement';
import microbitLedText from './Microbit_Led.md';

const MicroBitLedPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={microbitLedText} />
  </div>
);

export default MicroBitLedPage;
