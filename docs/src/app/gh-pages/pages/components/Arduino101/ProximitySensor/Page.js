import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../../../MarkdownElement';
import Arduino101ProximitySensorText from './Arduino101ProximitySensor.md';

const Arduino101ProximitySensorPage = () => (
  <div>
    <Title render={(previousTitle) => `Arduino101 - ${previousTitle}`} />
    <MarkdownElement text={Arduino101ProximitySensorText} />
  </div>
);

export default Arduino101ProximitySensorPage;
