import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function FeatureButtons({ handleResetClick, handleExampleClick }) {
  return (
    <>
      <div className="feature-buttons">
        <ButtonFunction
          handleClick={handleResetClick}
          label={"Reset"}
        ></ButtonFunction>
        <ButtonFunction
          handleClick={handleExampleClick}
          label={"Load Example"}
        ></ButtonFunction>
        <PdfDownloadButton>Download PDF</PdfDownloadButton>
      </div>
    </>
  );
}

function ButtonFunction({ handleClick, label }) {
  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {label}
      </button>
    </>
  );
}

function PdfDownloadButton() {
  function downloadPdf() {
    const div = document.querySelector(".cv-template");
    div.style.border = "none";

    html2canvas(div, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      // Calculate image width and height based on US or A4 page dimensions
      //US Size
      //const pageWidth = 216;
      //const pageHeight = 279;

      //A4 Size
      const margin = 5;
      const pageWidth = 211;
      const pageHeight = 298;
      const imgWidth = pageWidth - margin * 2;
      const imgHeight = pageHeight - margin * 2;
      let heightLeft = imgHeight;
      let position = margin;

      // Add image to first page of the PDF
      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - margin * 2;

      // Handle multi-page scenario if div height exceeds page height
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight - margin * 2;
      }

      const username = document.querySelector(".display-info > h2").textContent;
      pdf.save(username + "_CV_byADDikt8.pdf");

      div.style.border = "1px solid black";
    });
  }

  return (
    <>
      <button onClick={downloadPdf}>Download as PDF</button>
    </>
  );
}

export default FeatureButtons;
