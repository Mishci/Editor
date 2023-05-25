import { useRef, useEffect } from "react";
import axios from "axios";

import WebViewer from "@pdftron/webviewer";

const EditorPage = () => {
  const viewer = useRef();
  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        initialDoc:
          "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
        licenseKey: "your_license_key", // sign up to get a free trial key at https://dev.apryse.com
        documentType: "pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core;
      instance.UI.setLanguage("cs");

      documentViewer.addEventListener("documentLoaded", () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          Author: annotationManager.getCurrentUser(),
        });

        annotationManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotationManager.redrawAnnotation(rectangleAnnot);

        //added the button for saving to server
        instance.UI.setHeaderItems((header) => {
          header.push({
            type: "actionButton",
            title: "Odešli data na server",
            img: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 21H19C20.103 21 21 20.103 21 19V8C21 7.735 20.895 7.48 20.707 7.293L16.707 3.293C16.52 3.105 16.266 3 16 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21ZM15 19H9V14H15V19ZM13 7H11V5H13V7ZM5 5H7V9H9H11H13H14H15V5H15.586L19 8.414L19.001 19H17V14C17 12.897 16.103 12 15 12H9C7.897 12 7 12.897 7 14V19H5V5Z" fill="#868E96"/></svg>',
            onClick: async () => {
              alert("Potvzením pošlete soubor na náš server");
              const doc = documentViewer.getDocument();
              const xfdfString = await annotationManager.exportAnnotations();
              const data = await doc.getFileData({
                // saves the document with annotations in it
                xfdfString,
              });
              const arr = new Uint8Array(data);
              const blob = new Blob([arr], { type: "application/pdf" });
              const blobData = new FormData();
              blobData.append("my blob", blob, "blob.pdf");
              // handling the blob

              await fetch("http://localhost:5000/post", {
                // HTTP request type
                method: "POST",
                // Sending our blob with our request
                body: blobData,
              })
                .then((response) => {
                  if (response.status === 200) console.log("Connection ok");
                })
                .catch((err) => alert(err));
            },
          });
        });
      });
      // return () => {
      //   documentViewer.removeEventListener("documentLoaded");
      // };
    });
  }, []);

  return (
    <div
      className="webviewer"
      ref={viewer}
      style={{ height: "100vh", width: "90vw", margin: "auto" }}
    ></div>
  );
};
export default EditorPage;
