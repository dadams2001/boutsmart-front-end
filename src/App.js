import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MerchDashboard from "./Components/MerchDashboard/MerchDashboard.js";
import AnalyticsDashboard from "./Components/AnalyticsDashboard/AnalyticsDashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<MerchDashboard />} />
              <Route path="/Analytics" element={<AnalyticsDashboard />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <h1>404 Not Found</h1>
                  <p>Looks like someone made an oopise-whoopise!</p>
                  <p>
                    Let's get you back to <Link to="/">home.</Link>
                  </p>
                </main>
              }
            />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
