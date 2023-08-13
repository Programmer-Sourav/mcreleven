import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import ItemCard from "../components/ItemCard"

export default function WatchLater(){

   const { watchLaterList } = useContext(AppContext)

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