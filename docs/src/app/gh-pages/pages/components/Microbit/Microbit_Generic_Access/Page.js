import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../../CodeExample';
import PropTypeDescription from '../../../../PropTypeDescription';
import MarkdownElement from '../../../../MarkdownElement';
import microbitGenericAccessText from './Microbit_Generic_Access.md';

const MicroBitGenericAccessPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={microbitGenericAccessText} />
  </div>
);

export default MicroBitGenericAccessPage;
