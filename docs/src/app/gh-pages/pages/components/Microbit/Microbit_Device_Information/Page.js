import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../../CodeExample';
import PropTypeDescription from '../../../../PropTypeDescription';
import MarkdownElement from '../../../../MarkdownElement';
import MicroBitDeviceInformationText from './Microbit_Device_Information.md';

const MicroBitDeviceInformationPage = () => (
  <div>
    <Title render={(previousTitle) => `Micro:bit - ${previousTitle}`} />
    <MarkdownElement text={MicroBitDeviceInformationText} />
  </div>
);

export default MicroBitDeviceInformationPage;
