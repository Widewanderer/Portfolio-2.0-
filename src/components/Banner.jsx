import HikingPic from "../assets/profile/HikingPic.png";
import MidJourney from "../assets/profile/MidJourney.png";

export default function Banner() {
  const bannerStyle = {
    position: "relative", 
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.4)",
    padding: "10px",
  };

  const photoStyle = {
    position: "absolute", // Position the photo absolutely within the banner
    top: "5vh", // Adjust the top position as needed
    left: "5vw", // Adjust the left position as needed
    width: "120px", // Adjust the width of the photo
    height: "auto", // Maintain aspect ratio
    borderRadius: "50%",
  };

  return (
    <div className="banner" style={bannerStyle}>
      {/* Display the photo */}
      <img src={MidJourney} alt="Profile Picture" style={photoStyle} />
      {/* Add additional content or text if needed */}
    </div>
  );
}

// export default function Banner() {
//   const bannerStyle = {
//     boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.4)",
//     padding: "10px",
//   };
//   return (
//     // create border and blur border
//     <div className="banner" style={bannerStyle}>
//       {/* could conditionally render information here (if esle statement)
//         Alternatively, could just use a h2, h3, p tag, etc  */}
//     </div>
//   );
// }
