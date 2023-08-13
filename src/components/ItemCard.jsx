import "../card.css"
import "../buttons.css"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export default function ItemCard({data}){

   const {  addToStarredMovies, addToWatchLaterList, moviesData, removeFromStarredMovies, watchLaterList, removeFromWatchLaterList  } = useContext(AppContext)
   const starredMovies = moviesData.filter((movie)=>movie.isStarred)
   
    return(
        <div>
      <div class="card">
        <img
          src={data.imageURL}
          alt="CardImgDownloaded"
        />
        <div class="card-details">
          <h2>{data.title}</h2>
          <p>{data.summary}</p>
        </div>
        <div>
        {starredMovies.find((movie)=>(movie.id===data.id)) ? <button className="hover-button" onClick={()=>{removeFromStarredMovies(data.id)}}>Unstar</button> : <button className="hover-button" onClick={()=>{addToStarredMovies(data.id)}}>Star</button> } 
        {watchLaterList && watchLaterList.find((movie)=>(movie.id===data.id))? <button className="hover-button" onClick={()=>{removeFromWatchLaterList(data.id)}}>Added To Watch Later</button> :  <button className="hover-button" onClick={()=>{addToWatchLaterList(data)}}>Add To Watchlist</button>}
        </div>
      </div>
    </div>
    )
}