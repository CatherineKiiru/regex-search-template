import { getPosts } from "./api/Axios";
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);
  const content = "";

  return content;
};

export default App;
