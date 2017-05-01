import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101LightSensorText from './Arduino101LightSensor.md';

const Arduino101LightSensorPage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101LightSensorText} />
  </div>
);

export default Arduino101LightSensorPage;
