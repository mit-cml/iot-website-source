import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from './MarkdownElement';
import Tutorials from './Tutorials';
import TutorialsText from './Tutorials';

const TutorialsPage = () => (
  <div>
    <Title render={(previousTitle) => `Tutorials - ${previousTitle}`} />
    <MarkdownElement text={TutorialsText} />
    <Tutorials />
  </div>
);

export default TutorialsPage;
