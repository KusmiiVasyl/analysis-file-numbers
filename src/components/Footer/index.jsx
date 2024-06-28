import styles from "./style.module.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        &copy; 2024 Vasyl Kusmii (Front-End Developer).
        <br />
        All rights reserved.
      </p>
      <div className={styles['icon-container']}>
        <a href="https://www.linkedin.com/in/vasyl-kusmii-4a2581242/">
          <FiLinkedin />
        </a>
        <a href="https://github.com/KusmiiVasyl">
          <FiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
