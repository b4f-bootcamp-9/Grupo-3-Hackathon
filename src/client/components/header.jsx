import Image from "next/image"
import styles from "@/client/styles/Header1.module.css";
import logo from "@/client/styles/images/logo3r1.png";

export default function Header() {
  return (
    <div>
          <header className={styles.bighead}>
      <div className={styles.optilogo}>
      <Image src={logo} alt="Logo" width={85} unoptimized />
      </div>
      <nav className={styles.navigator}>
        <ul>
        <li>
            <a href="#">Home</a>
          </li>
        
        </ul>
        <div className={styles.contentBtn}>
        </div>
      </nav>
    </header>

    <h1 className={styles.text}></h1>

   
    </div>

  );
}
