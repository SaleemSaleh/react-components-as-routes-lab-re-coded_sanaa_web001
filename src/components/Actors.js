import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
<<<<<<< HEAD
     <h1>Actors Page</h1>
     {actors.map((ele) => (
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
      <h1>Actors Page</h1>
      {actors.map((a) => (
          <div>
              <p>Name: {a.name}</p>
              <ul>
                  {((a.movies.map((e) => (
                      <li>{e}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
>>>>>>> a17a6e078e7ff8aa983a9ae5181015dee4c33ddb
  );
};

export default Actors;
