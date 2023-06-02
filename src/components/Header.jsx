import { SiRipple } from "react-icons/si";

export const Header = () => {
  return (
    <nav
      className="navbar navbar-dark bg-black"
      style={{
        width: "50%",
        margin: "auto",
        borderRadius: "0 0 10px 10px",
        borderLeft: "white solid 2px",
        borderRight: "white solid 2px",
        borderBottom: "white solid 2px",
      }}
    >
      <div className="container-fluid">
        <div className="navbar-brand mx-auto fw-bold">
          <h3 className="animate__animated animate__slideInDown animate__slow">
            <SiRipple size={30} className="me-1" /> XRP SECentral
          </h3>
        </div>
      </div>
    </nav>
  );
};
