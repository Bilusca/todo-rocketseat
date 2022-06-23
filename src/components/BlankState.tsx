import Clipboard from "../assets/clipboard.png";
import styles from "./BlankState.module.scss";

export function BlankState() {
  return (
    <div className={styles.BlankState}>
      <img src={Clipboard} alt="imagem de uma prancheta" />
      <p>
        Você ainda não tem tarefas cadastradas <br />
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
