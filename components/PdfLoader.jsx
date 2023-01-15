import React, { useState } from 'react';
import { Document, Page, pdfjs  } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfLoader = (props) => {
	const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const alertUser = () =>{
    // alert()
  }


  return (
    <>
      <Document
        file={props.src}
        onLoadSuccess={onDocumentLoadSuccess}
        loading = {<div>Please wait!</div>}
      >
        <Page 
            pageNumber={pageNumber} 
            className = "mx-auto" 
            loading = {<div>Please wait!</div>}
            // onLoadSuccess = {alert()}
            onRenderTextLayerSuccess	 = {()=>alertUser()}
        />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PdfLoader