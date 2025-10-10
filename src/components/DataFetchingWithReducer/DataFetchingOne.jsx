import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      setLoading(false)
      setError('')
      setPost(res.data)
    })
    .catch(()=>{
        setLoading(false)
        setError('Something went wrong.')
        setPost({})
    })
  }, []);

  return <div>
    {loading?(<h1>Loading</h1>):post.title}
    {error?'<h1>Something went wrong.</h1>':null}
  </div>;
};

export default DataFetchingOne;
