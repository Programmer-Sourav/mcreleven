import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { useParams } from "react-router"

export default function ViewDetails(){

    const {moviesData} = useContext(AppContext)
    const {id} = useParams()

    function findMovie(){
    const movie = moviesData.find((movie)=>(movie.id.toString()===id))
    return movie;
    }

    let findTheMovie = findMovie()

    const jsonObj = JSON.stringify(findTheMovie);
    localStorage.setItem('details', jsonObj);

    if(!findTheMovie){
    
const persistedJson = localStorage.getItem('details');

findTheMovie = JSON.parse(persistedJson);
    }

console.log(findTheMovie); 


    return(
        <div>
            {
                <ul>
                 <img src={findTheMovie.imageURL} alt="downloaded" height="256" width="256"/>
                <p>{findTheMovie.title}</p>
                <p>{findTheMovie.cast.map((eachCast)=>(eachCast+", "))}</p>
                </ul>
            }
        </div>
    )
}