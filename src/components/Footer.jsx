import { useLocation, useNavigate } from 'react-router-dom';

const footerStyle = {
  height: "50px",
  padding: "15px",
  marginTop: "10px",
  backgroundColor: "#272927", // Add a background color for visibility
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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