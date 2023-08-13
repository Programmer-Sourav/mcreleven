import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import ItemCard from "../components/ItemCard"

export default function WatchLater(){

   let { watchLaterList } = useContext(AppContext)

  
   const persistedJSON = localStorage.getItem("watchLaterData")
   let watchLaterPersisted = JSON.parse(persistedJSON)
   
   if(watchLaterList.length===0)
    watchLaterList = watchLaterPersisted
    
   
    return(
        <div> 
            {
             watchLaterList ?  watchLaterList.map((watchLater)=>(
                <ItemCard data = {watchLater}/> 
             )): <h1>No movie to watch later. Add a few!</h1>
            }

        </div>
    )
}