import styles from './Counter.module.css';
import { Link } from "react-router-dom";

export function Counter() {

  return (
    <div>
      <div className={styles.row}>
        
      <Link to="/mf">
        <button className={styles.button}>
            Mecânica dos Fluidos
        </button>
      </Link>
      <Link to="/pa">
        <button className={styles.button}>
            Pressão Atmosférica
       </button>
      </Link>
      <Link to="/aviao">
        <button className={styles.button}>
            Vamos falar de coisa boa
        </button>
      </Link>

      </div>
    </div>
  );
}
