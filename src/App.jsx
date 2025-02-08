import { Route,Routes } from "react-router-dom"
// import Navigations from "./components/Navigations/Navigations"
// import HomePage from "./pages/HomePage/HomePage"
// import MoviesPage from "./pages/MoviesPage/MoviesPage"
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
// import MovieCast from "./components/MovieCast/MovieCast"
// import MovieReviews from "./components/MovieReviews/MovieReviews"
import { lazy, Suspense } from "react"

const Navigations = lazy(()=>import('./components/Navigations/Navigations'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(()=>import('./components/MovieReviews/MovieReviews'))
const NotFoundPage = lazy(()=>import('./components/NotFoundPage/NotFoundPage'))






function App() {


  return (
     <>
      <Navigations/>
      <Suspense>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}/>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
          <Route path='/movies/:movieId/cast' element={<MovieCast/>} />
          <Route path='/movies/:movieId/reviews' element={<MovieReviews/>} />
        </Route>
        <Route path="/*" element={<NotFoundPage />}/>
        </Routes>
        </Suspense>
    </>
  )
}

export default App
