import { useLocation, useNavigate } from 'react-router-dom';

const footerStyle = {
  height: "50px",
  padding: "15px",
  marginTop: "10px",
  backgroundColor: "#232323", // Add a background color for visibility
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
//   position: "fixed",
//   bottom: 0, // Fix position to bottom of viewport
  width: "100%",
};

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <footer class= "footer" style={footerStyle}>
            <h6 style={{color:"#FFF"}}>
                The WideWanderer

            </h6>

        </footer>
    )
}

export default Footer; 