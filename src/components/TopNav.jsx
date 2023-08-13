import { useContext } from "react";
import "./topnav.css";
import { AppContext } from "../contexts/AppContext";

export default function TopNav() {
   const { onChangeHandler } = useContext(AppContext)
    return (
      <div class="top-nav">
        <div class="logo">
          <i class="fas fa-code"></i> IMDB
        </div>
        <li style={{listStyle: "none"}}>
            <input type="search" className="searchstyle" value={{}} onChange={()=>{onChangeHandler()}}/>
          </li>
        <ul class="nav-links">
          <li>
            <a href="#">
              <i class="fas fa-home"></i> Movies
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-user"></i> Watchlist
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-envelope"></i> Starred Movies
            </a>
          </li>
        </ul>
      </div>
    );
  }
  