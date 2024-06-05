import React from 'react';
import Iframe from 'react-iframe';

function NotebookViewer() {
  return (
    <div>
      <h1>Notebook Viewer</h1>
      <Iframe
        url="https://nbviewer.org/github/ankitarm/EDA/blob/main/EDA.ipynb"
        width="100%"
        height="600px"
        id="notebook-iframe"
        className="notebook-iframe"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default NotebookViewer;
