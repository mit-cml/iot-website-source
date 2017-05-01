import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import microbitComponentText from './Microbitcomponent.md';

const MicroBitPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={microbitComponentText} />
  </div>
);

export default MicroBitPage;
