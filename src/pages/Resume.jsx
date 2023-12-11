import PDF from "../assets/SlavaPlaceHolderCVPDF.pdf";
import { useState } from "react";

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false);
  const handleToggle = () => {
    setShowPdf(!showPdf);
  };
  return (
    <div>
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
          {/* (RESUME ) Lists of languages, frameworks, libraries, and tools Ive
          used. ( List of projects// Links to projects// Description of
          projects//?? ) (here or in seperate Page) */}
        </p>
      )}
    </div>
  );
}
