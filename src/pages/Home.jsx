import TopNav from "../components/TopNav";
import "../App.css"
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import ItemCard from "../components/ItemCard";
import { ChakraProvider } from "@chakra-ui/react";
import ModalSkeleton from "../components/ModalSkeleton";
export default function Home(){

    const { moviesData,  selectedGenreState, selectedRatingsState, selectedYearState, setSelectedGenreState,
        setSelectedRatingsState, setSelectedYearState, ratings, years, onSelectGenre, onSelectedYear, onSelectedRating, addANewMovie,
        searchState} = useContext(AppContext)

    const persistedJSON = localStorage.getItem("moviesData")
    const persistedMovies = JSON.parse(persistedJSON)
   

    const allMovieGeneres = persistedMovies.reduce((accumulatedMovieGenres, currentMovie) =>
    currentMovie.genre.reduce((accumulatedGenre, genre) =>
    !accumulatedGenre.includes(genre) ?  [...accumulatedGenre, genre] : accumulatedGenre, accumulatedMovieGenres), []);
    
    const addToGenreArray = ["All Genre", ...allMovieGeneres]
    const addToReleaseYear = ["Release Year", ...years]
    const addToRatings = ["Rating", ...ratings]

    //filters
    let filteredList = moviesData

    if(selectedGenreState)
    filteredList = selectedGenreState==="All Genre" ? filteredList : filteredList.filter((movie)=>movie.genre.includes(selectedGenreState))
    if(selectedYearState)
    filteredList = selectedYearState==="Release Year" ? filteredList : filteredList.filter((movie)=>movie.year===parseInt(selectedYearState))
    if(selectedRatingsState)
    filteredList = selectedRatingsState==="Rating" ? filteredList : filteredList.filter((movie)=>movie.rating===parseInt(selectedRatingsState))
    console.log(234, selectedGenreState, filteredList)
   //search
   if(searchState)
   filteredList = filteredList.filter((movie)=>movie.title.toLowerCase().includes(searchState.toLowerCase()) ||
           movie.director.toLowerCase().includes(searchState.toLowerCase()) ||
           movie.cast.find((eachCast)=>eachCast.toLowerCase().includes(searchState.toLowerCase())))

    
    return(
        <div>
            {
                <ul>
                <TopNav/>
                
                <h1>Movies</h1>
                <p><select value ={selectedGenreState} onChange={(e)=>{onSelectGenre(e)}}>
                    {addToGenreArray.map((genre)=>(
                        <option>{genre}</option>
                    ))}
                </select>
                <select value ={selectedYearState} onChange={(e)=>{onSelectedYear(e)}}>
                    {addToReleaseYear.map((year)=>(
                        <option>{year}</option>
                    ))}
                </select>
                <select value ={selectedRatingsState} onChange={(e)=>{onSelectedRating(e)}}>
                    {addToRatings.map((rating)=>(
                        <option>{rating}</option>
                    ))}
                </select>
                {/* <button className="hover-button" onClick={()=>{addANewMovie()}}>Add A Movie</button>  */}
                <ChakraProvider>
                    <ModalSkeleton/>
                </ChakraProvider>
                </p>

                {
                    filteredList.map((movie)=>(
                        <li  key={movie.id} style={{listStyle: "none", display: "inline-block"}}> 
                            <ItemCard data = {movie} />
                        </li>
                    ))
                }

                
                </ul>
            }
        </div>
    )
}