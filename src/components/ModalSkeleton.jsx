import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";


  export default function ModalSkeleton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {moviesData, setMoviesData, addANewMovie } = useContext(AppContext)


    const [movieTitle, setMovieTitle] = useState("")
    const [movieYear, setMovieYear] = useState("")
    const [movieGenre, setMovieGenre] = useState("")
    const [movieRating, setMovieRating] = useState("")
    const [movieDirector, setMovieDirector] = useState("")
    const [movieCast, setMovieCast] = useState("")
    const [movieSummary, setMovieSummary] = useState("")
    const [movieWriter, setMovieWriter] = useState("")
    const [movieImage, setMovieImage] = useState("")

    const [cast, setCast] = useState([])
    const [genre, setGenre] = useState([])


    const onTitleChange = (e) =>{
       setMovieTitle(e.target.value)
    }

    const onYearChange = (e) =>{
       setMovieYear((e.target.value))
    }

    const onGenreChange = (e) =>{
       setMovieGenre(e.target.value)
    }

    const onRatingChange = (e) =>{
        setMovieRating(e.target.value)
    }

    const onDirectorChange = (e) =>{
         setMovieDirector(e.target.value)
    }

    const onWriterChange = (e) =>{
         setMovieWriter(e.target.value)
    }

    const onCastChange = (e) =>{
         setMovieCast(e.target.value)
    }

    const onSummaryChange = (e) =>{
           setMovieSummary(e.target.value)
    }

    const onImageChange = (e) =>{
          setMovieImage(e.target.value)
    }

    const saveMovieDetails = () =>{
        setGenre([...genre, movieGenre])
        setCast([...cast, movieCast])
        const movie = {
            id: moviesData.length+1, 
            title: movieTitle, 
            year: movieYear, 
            genre: genre, 
            rating: movieRating, 
            director: movieDirector, 
            writer: movieWriter, 
            cast: cast, 
            summary: movieSummary, 
            imageUrl: movieImage
        }
        addANewMovie(movie)
    }
    return (
      <>
        <Button onClick={onOpen}>Add A Movie</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add your movie details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <input type="text" className="inputstyle" placeholder="Title" value={movieTitle} onChange={(e)=>{onTitleChange(e)}}/>
                <input type="text"  className="inputstyle" placeholder="Year" value={movieYear} onChange={(e)=>{onYearChange(e)}}/>
                <input type="text" className="inputstyle" placeholder="Genre" value={movieGenre} onChange={(e)=>{onGenreChange(e)}}/>
                <input type="text" className="inputstyle" placeholder="Rating" value={movieRating} onChange={(e)=>{onRatingChange(e)}}/>
                <input type="text" className="inputstyle" placeholder="Director" value={movieDirector} onChange={(e)=>{onDirectorChange(e)}}/>
                <input type="text" className="inputstyle" placeholder="Writer" value={movieWriter} onChange={(e)=>{onWriterChange(e)}}/>
                <input type="text" className="inputstyle" placeholder="Cast" value={movieCast} onChange={(e)=>{onCastChange(e)}}/>
                <input type="text" className="inputstyle" placeholder="Summary" value={movieSummary} onChange={(e)=>{onSummaryChange(e)}}/>
                <input type="text" className="inputstyle" placeholder="Image" value={movieImage} onChange={(e)=>{onImageChange(e)}}/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>{saveMovieDetails()}}>
                Save Details
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }