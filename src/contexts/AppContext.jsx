import { createContext, useState } from "react";
import { movies } from "../data/api";

export const AppContext = createContext()

export function AppProvider({children}){


    const [moviesData, setMoviesData] = useState(movies)
    const [selectedYearState, setSelectedYearState]  = useState("Release Year")
    const [selectedGenreState, setSelectedGenreState] = useState("All Genre")
    const [selectedRatingsState, setSelectedRatingsState] = useState("Rating")
    const [searchState, setSelectedSearchState] = useState("")

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
        setMoviesData([...moviesData, newMovieDetails ])
    }
    for(let i = 1990; i<2024; i++){
        years = [...years, i]
    }
    return(
        <AppContext.Provider value = {{onChangeHandler, moviesData, setMoviesData, onSelectGenre, 
            years, selectedGenreState, selectedRatingsState, selectedYearState, setSelectedGenreState,
            setSelectedRatingsState, setSelectedYearState, ratings, onSelectedYear, onSelectedRating,addANewMovie, 
            searchState, setSelectedSearchState}}>{children}</AppContext.Provider>
    )
}