import HikingPic from "../assets/profile/HikingPic.png";
import MidJourney from "../assets/profile/MidJourney.png";

export default function Banner() {
  const bannerStyle = { // image & additional styling for banner in App.css 
    position: "relative", 
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.4)",
    padding: "10px",
  };

  const photoStyle = {
    position: "absolute", // Position the photo absolutely within the banner
    top: "5vh", 
    left: "5vw", 
    width: "100px", 
    height: "auto", // Maintain aspect ratio
    borderRadius: "50%",
  };

  return (
    <div className="banner" style={bannerStyle}> 
      <img src={MidJourney} alt="Profile Picture" style={photoStyle} /> 
      {/* Profile Picture within the banner */}
    </div>
  );
}


