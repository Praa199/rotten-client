import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as PATHS from "../utils/paths.js";

// Mounting a component => once
// Updating a component => X amount of times
// Unmounting a component => once

//------------------------------------------FUNCTIONAL wAY:

function MoviesPage() {
  const [listOfMovies, setListOfMovies] = React.useState([]);

  React.useEffect(() => {
    console.log("Displays when entering the page (Mounting)");
    //at this point the API will get called
    axios
      .get(`http://localhost:5000/api/movies`)
      .then((response) => {
        console.log("response:", response);
        setListOfMovies(response.data);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => console.log("Displays when leaving the page");
  }, []); // second param:  , [] equals componentDidMount()
  //and stops the infinite response from the server
  return (
    <div>
      <h1>MOVIES</h1>
      {listOfMovies.map((movie) => {
        return (
          <section key={movie._id}>
            <Link to={`${PATHS.MOVIES_PAGE}/${movie._id}`}>
              <h1>{movie.title}</h1>
              <img src={movie.coverPic} style={{ width: "300px" }} />
            </Link>
          </section>
        );
      })}
    </div>
  );
}

//----------------------------------------cLASSY wAY eQUIVALENT:

// class MoviesPage extends React.Component {
//   state = {
//     counter: 0,
//   };
//   componentDidMount = () => {
//     console.log("mounted***, when entering the page (component)");
//       axios
// .get(`http://localhost:5000/api/movies`)
// .then((response) => {
//   console.log("response:", response);
// })
// .catch((err) => {
//   console.error(err);
// });
//};
//   componentDidUpdate = () => {
//     console.log("updates***, when this.state.counter gets updated");
//   };
//   componentWillUnmount = () => {
//     console.log("unmount***, when leaving page");
//   };
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>MOVIES</h1>
//         <h3>COUNTER {this.state.counter}</h3>
//         <button onClick={this.increment}>Add</button>
//       </div>
//     );
//   }
// }

export default MoviesPage;
