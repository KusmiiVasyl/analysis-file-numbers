import { useState } from "react";
import styles from "./styles.module.css";

const FileUpload = ({ onFileLoaded, setIsLoading, handleResetStats }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileRead = async () => {
    handleResetStats();
    setIsLoading(true);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const numbers = text.trim().split(/\s+/).map(Number);
        console.log(numbers);
        onFileLoaded(numbers);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className={styles.container}>
      <input type="file" onChange={handleFileChange} accept=".txt" />
      <button onClick={handleFileRead} disabled={!file}>
        Read File
      </button>
    </div>
  );
};

export default FileUpload;
