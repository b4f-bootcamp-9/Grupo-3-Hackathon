import ActionAreaCard from "@/client/components/card";
import styles from "@/client/styles/landing_page.module.css";
import CardImoveis from "@/client/components/cardimoveis";
import Header from "@/client/components/header";


export default function LandingPage() {
  return (
    <div>
      <div>
      <Header />
    </div>
    <div className={styles.body}>
      <div className={styles.header}></div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <img src="10.png" alt="Pessoa" className={styles.personImage} />
        </div>
        <div className={styles.column}>
          <ActionAreaCard />
        </div>
        <div className={styles.column}>
          <CardImoveis />
        </div>
      </div>
    </div>
    </div>
  );
}

