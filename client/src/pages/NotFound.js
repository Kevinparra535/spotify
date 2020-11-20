import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <React.Fragment>
      <lottie-player
        src="https://assets2.lottiefiles.com/datafiles/sPJTLSWjrBGgvJK/data.json"
        background="transparent"
        speed="1"
        autoplay
        classname="w-full"
      ></lottie-player>
      <Link to="/dashboard">Volver al inicio</Link>
    </React.Fragment>
  );
}

export default NotFound;
