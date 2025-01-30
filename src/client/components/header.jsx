"use client";
import Image from "next/image"
import styles from "@/client/styles/Header1.module.css";
import logo from "@/client/styles/images/logo3r1.png";
import {useRouter} from "next/navigation"
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
  const router = useRouter()
  return (
    <div>
          <header className={styles.bighead}>
      <div className={styles.optilogo}>
      <Image src={logo} alt="Logo" width={85} unoptimized />
      </div>
      <nav className={styles.navigator}>
        <ul>
        <li>
            <a href="#" onClick={()=> router.push("/")}>
              Home</a>
          </li>
        
        </ul>
        <div>
        <PersonIcon  sx={{ 
    color: '#beae88',
    fontSize: 50 
  }} 
/>
        </div>
      </nav>
    </header>

    <h1 className={styles.text}></h1>

   
    </div>

  );
}
