import AppReview from "./pages/AppReview";
import UserProvider from "./hooks/useRevewContext";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <AppReview />
      </div>
    </UserProvider>
  );
}

export default App;
