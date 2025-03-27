import { Header, Main, MovieDetails, Footer } from './layout';
import { BrowserRouter as Router, Routes, Route } from "react-router";


export default function App() {
  return (
    <Router>
      < Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
      </Routes>
      < Footer />
    </Router>
  );
}
