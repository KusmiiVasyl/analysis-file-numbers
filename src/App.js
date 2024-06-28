import "./App.css";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import { useState } from "react";
import { calculateStats } from "./utils/calculateStats";
import { PacmanLoader } from "react-spinners";

function App() {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileLoaded = (numbers) => {
    console.log(numbers);
    const stats = calculateStats(numbers);
    setStats(stats);
    setIsLoading(false);
  };

  const handleResetStats = () => {
    setStats(null);
  };

  return (
    <div>
      <div className="stats-container">
        <h2>Number Analyzer</h2>
      </div>
      <FileUpload
        onFileLoaded={handleFileLoaded}
        setIsLoading={setIsLoading}
        handleResetStats={handleResetStats}
      />
      {stats && (
        <div className="stats-container">
          <div className="stats">
            <p>
              Max: <span>{stats.max}</span>
            </p>
            <p>
              Min: <span>{stats.min}</span>
            </p>
            <p>
              Mean: <span>{stats.mean}</span>
            </p>
            <p>
              Median: <span>{stats.median}</span>
            </p>
            <p>
              Longest Increasing Sequence:{" "}
              <span>{stats.longestIncreasing}</span>
            </p>
            <p>
              Longest Decreasing Sequence:{" "}
              <span>{stats.longestDecreasing}</span>
            </p>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="stats-container load-container">
          <PacmanLoader color="#aa6103" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
