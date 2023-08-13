import { createContext, useState } from "react";
import { movies } from "../data/api";

export const AppContext = createContext()

export function AppProvider({children}){


    const [moviesData, setMoviesData] = useState(movies)
    const [selectedYearState, setSelectedYearState]  = useState("Release Year")
    const [selectedGenreState, setSelectedGenreState] = useState("All Genre")
    const [selectedRatingsState, setSelectedRatingsState] = useState("Rating")
    const [searchState, setSelectedSearchState] = useState("")
    //const [starredMovies, setStarredMovies] = useState([])
    const [watchLaterList, setWatchLaterList] = useState([])

    let years = [];
    let ratings = [1,2,3,4,5,6,7,8,9,10];

    const onChangeHandler = (e) => {
        setSelectedSearchState(e.target.value)
    }

    const onSelectGenre = (e) =>{
       setSelectedGenreState(e.target.value)
    } 

    const onSelectedYear = (e) =>{
      setSelectedYearState(e.target.value)
    }

    const onSelectedRating = (e) =>{
     setSelectedRatingsState(e.target.value)
    }

    const addANewMovie = (newMovieDetails) =>{
        console.log(245, newMovieDetails)
        setMoviesData([...moviesData, newMovieDetails ])
    }
    for(let i = 1990; i<2024; i++){
        years = [...years, i]
    }

    const addToWatchLaterList = (newMovieToWatchLater) =>{
      setWatchLaterList([...watchLaterList, newMovieToWatchLater])
    }
    console.log(watchLaterList)
    const addToStarredMovies = (newStarredMovieId) =>{
      //setStarredMovies([...starredMovies, newStarredMovie])
      //star and watch movies are same functionality... just implementing in two different ways
      const updated = moviesData.map((movie)=>(movie.id===newStarredMovieId? {...movie, isStarred: true} : movie))
      setMoviesData(updated)
    }

    const removeFromStarredMovies = (newStarredMovieId) =>{
     setMoviesData(moviesData.map((movie)=>movie.id===newStarredMovieId ? {...movie, isStarred: false} : movie))
    }

    const removeFromWatchLaterList = (watchLaterItemId) =>{
     setWatchLaterList(watchLaterList.filter((movie)=>movie.id!==watchLaterItemId))
    }
    
    if(moviesData){
    const movieDataJson = JSON.stringify(moviesData)
    localStorage.setItem("moviesData", movieDataJson)
    }

    if(watchLaterList){
        const watchLaterJson = JSON.stringify(watchLaterList)
        localStorage.setItem("watchLaterData", watchLaterJson)
        }
  
    return(
        <AppContext.Provider value = {{onChangeHandler, moviesData, setMoviesData, onSelectGenre, 
            years, selectedGenreState, selectedRatingsState, selectedYearState, setSelectedGenreState,
            setSelectedRatingsState, setSelectedYearState, ratings, onSelectedYear, onSelectedRating,addANewMovie, 
            searchState, setSelectedSearchState, addToStarredMovies, addToWatchLaterList, removeFromStarredMovies, removeFromWatchLaterList, watchLaterList}}>{children}</AppContext.Provider>
    )
}