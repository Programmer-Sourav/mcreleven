import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import ItemCard from "../components/ItemCard"

export default function StarredMovies() {

 const { moviesData } = useContext(AppContext)


 const filteredMovies = moviesData.filter((movie)=>(movie.isStarred))
    return(
        <div> 
         {
            filteredMovies.length>0 ?  filteredMovies.map((movie)=>(
                <ItemCard data={movie}/>
            )) : <h1>No Favourite movie to show...</h1>
         }
        </div>
    )
}