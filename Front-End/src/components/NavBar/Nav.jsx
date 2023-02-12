import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Logout/Logout";
import N from "../NavBar/NavBar.module.css";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className={N.container}>
        <div className={N.logoUp}>
          

        </div>

        <div className={N.menu}>
          <div className={N.navList}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className={N.itemMenu}>Inicio</div>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div className={N.itemMenu}>Quienes Somos</div>
            </Link>
            <div>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <div className={N.itemMenu}>Contactenos</div>
              </Link>
            </div>

          </div>
        </div>

        <div className={N.loginButton}>
          {isAuthenticated ? (
            <>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
          

        </div>

      </div>
    </>
  );
}