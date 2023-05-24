import {useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer'

const PDFEditor = (props) => {
  const current = props.ref.current

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        licenseKey: 'YOUR_LICENSE_KEY',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      },
      current,
    ).then((instance) => {
        const { documentViewer } = instance.Core;
        // you can now call WebViewer APIs here...
      });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={props.ref} style={{height: "100vh"}}></div>
    </div>
  );
};

export default PDFEditor