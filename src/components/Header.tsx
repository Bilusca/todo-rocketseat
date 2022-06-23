import styles from "./Header.module.scss";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={Logo} alt="" />
    </header>
  );
}
