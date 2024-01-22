import { useLocation, useNavigate } from 'react-router-dom';

const footerStyle = {
  height: "75px",
  padding: "15px",
  marginTop: "40px",
  backgroundColor: "#232323", // Add a background color for visibility
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  textAlign: "center",
};

const textFooterStyle = {
  width: "60%",
  margin: "10px auto",
};

const footerText = {
  color: "#E2E1D6",
};


const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <footer class="footer" style={footerStyle}>
        <div style={textFooterStyle}>
          <h6 style={footerText}>
            “Never let the future disturb you. You will meet it, if you have to,
            with the same weapons of reason which today arm you against the
            present.”
          </h6>
        </div>
      </footer>
    );
}

export default Footer; 