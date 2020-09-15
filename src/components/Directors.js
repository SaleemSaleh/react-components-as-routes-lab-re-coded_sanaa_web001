import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
<<<<<<< HEAD
     <h1>Directors Page</h1>
     {directors.map((ele) => (
         <div>
             <p>Name: {ele.name}</p>
             <ul>
                 {ele.movies.map((e) => (
                     <li >{e}</li>
                 ))}
             </ul>
         </div>
     ))}
   </div>
=======
      <h1>Directors Page</h1>
      {directors.map((ele) => (
          <div >
              <p>Name: {ele.name}</p>
              <ul>
                  {ele.movies.map((e) => (
                      <li >{e}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
>>>>>>> a17a6e078e7ff8aa983a9ae5181015dee4c33ddb
  );
}

export default Directors
