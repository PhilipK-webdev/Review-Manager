import { useEffect } from "react";
import AppReview from "./pages/AppReview";
function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      console.log("data", data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <AppReview />
    </div>
  );
}

export default App;
