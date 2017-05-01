import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../MarkdownElement';
import BluetoothLEText from './BluetoothLE.md';

const BluetoothLEPage = () => (
  <div>
    <Title render={(previousTitle) => `BluetoothLE - ${previousTitle}`} />
    <MarkdownElement text={BluetoothLEText} />
  </div>
);

export default BluetoothLEPage;
