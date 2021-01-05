import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const callAPI = async () => {
    await Axios.get(
      "https://wah4xd25j9.execute-api.eu-central-1.amazonaws.com/prod/api/v1/checkuser?email=owaistest@gmail.com&park_id=2"
    )
      .then((res) => setData(JSON.stringify(res.data)))
      .catch((err) =>
        setError(
          JSON.stringify(
            err?.response?.data?.message
              ? err?.response?.data?.message
              : err.message
          )
        )
      );
  };

  useEffect(() => {
    callAPI();
  }, []);
  return <div className="App">{data ? data : error}</div>;
}

export default App;
