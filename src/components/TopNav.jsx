import { useContext } from "react";
import "./topnav.css";
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";

export default function TopNav() {
   const { onChangeHandler, searchState } = useContext(AppContext)
    return (
      <div class="top-nav">
        <div class="logo">
          <i class="fas fa-code"></i> IMDB
        </div>
        <li style={{listStyle: "none"}}>
            <input type="search" className="searchstyle" value={searchState} placeholder="Search by movie title, cast or director" onChange={(e)=>{onChangeHandler(e)}}/>
          </li>
        <ul class="nav-links">
          <li>
              <i class="fas fa-home"></i> <Link to="/">Movies</Link>
            
          </li>
          <li>
            <a href="#">
              <i class="fas fa-user"></i> <Link to="/watchlater">Watch Later</Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-envelope"></i> <Link to="/starredmovieslist">Starred Movies</Link>
            </a>
          </li>
        </ul>
      </div>
    );
  }
  