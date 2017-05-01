import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../../CodeExample';
import PropTypeDescription from '../../../../PropTypeDescription';
import MarkdownElement from '../../../../MarkdownElement';
import microbitGenericAttributeText from './Microbit_Generic_Attribute.md';

const MicroBitGenericAttributePage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={microbitGenericAttributeText} />
  </div>
);

export default MicroBitGenericAttributePage;
