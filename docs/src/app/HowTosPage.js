import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from './MarkdownElement';
import HowTos from './HowTos';
import howtosText from './HowTosText.md';

const HowTosPage = () => (
  <div>
    <Title render={(previousTitle) => `How Tos - ${previousTitle}`} />
    <MarkdownElement text={howtosText} />
    <HowTos />
  </div>
);

export default HowTosPage();
