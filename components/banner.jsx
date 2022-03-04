import styles from './banner.module.css';

export default function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connaiseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shop</p>
      <input onClick={props.handleOnClick} className={styles.button} type='button' value={props.buttonText} />
    </div>
  );
}
