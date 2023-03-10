import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import {
  ClipLoader,
  CircleLoader,
  RingLoader,
  ScaleLoader,
  HashLoader,
} from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HashLoader color={"#902E8E"} loading={loading} size={200} />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
