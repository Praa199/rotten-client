// import React from "react";
// import axios from "axios";

// function AddMoviePage() {
//   const [listOfMovies, setListOfMovies] = React.useState([]);

//   React.useEffect(() => {
//     console.log("Displays when entering the page (Mounting)");
//     //at this point the API will get called
//     axios
//       .get(`http://localhost:5000/api/movies`)
//       .then((response) => {
//         console.log("response:", response);
//         setListOfMovies(response.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });

//     return () => console.log("Displays when leaving the page");
//   }, []);

//   return (
//     <div>
//       <h1>Add Movie Page</h1>
//     </div>
//   );
// }

// export default AddMoviePage;
