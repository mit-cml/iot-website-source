import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import InformationText from './information.md';

const Information = () => (
  <div>
    <Title render={(previousTitle) => `Information - ${previousTitle}`} />
    <MarkdownElement text={InformationText} />
  </div>
);

export default Information;
