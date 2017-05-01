import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../../CodeExample';
import PropTypeDescription from '../../../../PropTypeDescription';
import MarkdownElement from '../../../../MarkdownElement';
import mirobitDfuControlText from './Microbit_Dfu_Control.md';

const MicrobitDfuControlPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={mirobitDfuControlText} />
  </div>
);

export default MicrobitDfuControlPage;
