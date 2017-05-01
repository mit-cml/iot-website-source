import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';
import microbitIntroText from './Microbit.md';

const MicroBitPage = () => (
  <div>
    <Title render={(previousTitle) => `MicroBit - ${previousTitle}`} />
    <MarkdownElement text={microbitIntroText} />
  </div>
);

export default MicroBitPage;
