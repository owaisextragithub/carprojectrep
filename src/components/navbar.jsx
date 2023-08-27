import Logo from '../assets/logoBlack.png';

export default function Navbar() {
  const navbarStyle = {
    width: "98%",
    margin:"auto",
    height: "4em",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.16)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.15)"
  };

  const logoStyle = {
    width: '200px',
  };

  return (
    <header style={navbarStyle}>
      <img src={Logo} style={logoStyle} alt="logo" />
    </header>
  );
}
