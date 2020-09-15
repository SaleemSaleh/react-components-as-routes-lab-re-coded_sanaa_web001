import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((ele) => (
<<<<<<< HEAD
          <div >
=======
          <div>
>>>>>>> a17a6e078e7ff8aa983a9ae5181015dee4c33ddb
              <p>Name: {ele.title}</p>
              <p>Time: {ele.time}</p>
              <ul>
                  {ele.genres.map((e) => (
<<<<<<< HEAD
                      <li >{e}</li>
=======
                      <li>{e}</li>
>>>>>>> a17a6e078e7ff8aa983a9ae5181015dee4c33ddb
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;
