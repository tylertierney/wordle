import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navContainer}>
      <h3>Wordle</h3>
    </div>
  );
};

export default Navbar;
