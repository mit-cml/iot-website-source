import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../MarkdownElement';
import microbitIntroText from './Microbit.md';

const MicroBitPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={microbitIntroText} />
  </div>
);

export default MicroBitPage;
