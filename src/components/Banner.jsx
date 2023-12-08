export default function Banner() {
  const bannerStyle = {
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.4)",
    padding: "10px",
  };
  return (
    // create border and blur border
    <div className="banner" style={bannerStyle}>
      {/* could conditionally render information here (if esle statement)
        Alternatively, could just use a h2, h3, p tag, etc  */}
    </div>
  );
}
