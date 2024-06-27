import React, { useState } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const highlightedCode = Prism.highlight(code, Prism.languages.javascript, 'javascript');

  return (
    <div className="code-editor">
      <textarea
        value={code}
        onChange={handleChange}
        className="code-input"
      />
      <pre className="code-output" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </div>
  );
};

export default CodeEditor;

