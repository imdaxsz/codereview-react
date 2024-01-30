import styles from '@styles/empty.module.css';

interface Props {
  message: string;
  suggestion?: string;
}

export default function Empty({ message, suggestion }: Props) {
  return (
    <div className={styles.container}>
      <h3>{message}</h3>
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}
