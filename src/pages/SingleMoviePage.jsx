import React, { useEffect, useState } from "react";
import axios from "axios";

function SingleMoviePage(props) {
  //   console.log("props***", props);
  const [singleMovie, setSingleMovie] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.movieId}`)
      .then((response) => {
        console.log("response:", response);
        setSingleMovie(response.data);
      })
      .catch((err) => {
        console.error("ERRORRRR****", err);
      });
  }, []);

  return (
    <div>
      <h1>Single Movie Page</h1>
      <section key={singleMovie._id}>
        <h1>{singleMovie.title}</h1>
        <img src={singleMovie.coverPic} style={{ width: "400px" }} />
      </section>
    </div>
  );
}

export default SingleMoviePage;
