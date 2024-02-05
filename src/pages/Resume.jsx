import PDF from "../assets/SlavaTysonTrotzCVPDF.pdf";
import { useState } from "react";

const resumeStyle = {
minHeight: "50vh",
}

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false);
  const handleToggle = () => {
    setShowPdf(!showPdf);
  };
  return (
    <div className="Resume" style={resumeStyle}>
      <h1>Resume Page (about) </h1>
      <button onClick={handleToggle}>Toggle PDF</button>
      {showPdf ? (
        <div className="w-100">
          <object
            aria-label="pdf resume"
            width="100%"
            height="800"
            data={PDF}
            type="application/pdf"
          />
        </div>
      ) : (
        <p>
          Hit the "Toggle PDF button to view the Resume!"
        </p>
      )}
    </div>
  );
}
