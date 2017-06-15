import React from 'react';
import Title from 'react-title-component';
import DeviceList from './DeviceList';
import MarkdownElement from './MarkdownElement';
import DevicesIntroText from './DevicesIntro.md';

const DevicesIntroPage = () => (
  <div>
    <Title render={(previousTitle) => `Internet of Things - ${previousTitle}`} />
    <MarkdownElement text={DevicesIntroText} />
    <DeviceList />
  </div>
);

export default DevicesIntroPage;
