import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPhotos from './SearchPhotos';
import SearchResults from './SearchResults';
import Nav from './Nav';  // Import the Nav component for navigation

function App() {
  return (
    <Router>
      {/* The Nav component is included here */}
      <Nav />
      {/* This defines the various paths in the app and the components they render*/}
      <Routes>
        <Route path="/" element={<SearchPhotos />} />
        <Route path="/search/cats" element={<SearchResults query="cats" />} />
        <Route path="/search/dogs" element={<SearchResults query="dogs" />} />
        <Route path="/search/humans" element={<SearchResults query="humans" />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}
export default App;
