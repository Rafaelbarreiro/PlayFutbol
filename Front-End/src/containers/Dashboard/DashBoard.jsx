import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {getUsers} from "../../redux/actions/index";
import SideDash from "./SideDash";
import s from "../Dashboard/Dashboard.module.css"
import { Link } from "react-router-dom";
import { Person } from "@mui/icons-material";


export default function DashBoard(){
    const { isAuthenticated } = useAuth0();

    const dispatch = useDispatch();
    const allUsers = useSelector(state => state.users);
    useEffect(() => {
        dispatch(getUsers());
      }, []);

      return isAuthenticated && allUsers.length > 0 ? (
        <div className={s.content}>
             <div className={s.sideContainer}>
        <SideDash />
      </div>
      <div className={s.iconBlock}>
          <Link className={s.link} to="/dashboard/users">
            <Person sx={{ fontSize: 75 }} />
            <h5>Manage Users</h5>
          </Link>
        </div>
            <div>
                
                <p>hola</p>
                

            </div>
        </div>

      ):(
             <></>
      )
    
}