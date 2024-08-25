import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchPhotos } from './fetchData';

const SearchResults = ({query}) => {
  const params = useParams();
  const finalQuery = params.query || query;
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const results = await searchPhotos(finalQuery);
        setPhotos(results);
      } catch (error) {
        console.error('Error searching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    if (finalQuery) {
      fetchPhotos();
    }
  }, [finalQuery]); // Re-run the effect when the query changes

  return (
    <div>
      {loading && <p>Loading...</p>}
      {photos.length > 0 && <h2>Results for "{finalQuery}"</h2>}
      <div className="photo-container">
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.url_s} alt={photo.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;