import React from "react";
import s from "../Dashboard/SideDash.module.css";
import { Link } from "react-router-dom";

export default function SideDash() {
    return (
      <div className={s.Container}>
        <h5>Admin</h5>
        <ul className={s.sideNav}>
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <li>
              <h6>Home</h6>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/stats">
            <li>
              <h6>Stats</h6>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/users">
            <li>
              <h6>Users</h6>
            </li>
          </Link>
        </ul>
  
      </div>
    );
  }