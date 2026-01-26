import styles from "./Title.module.css";

const Title = () => {
  return (
    <div>
      {/* <h1 className={styles['my-title']}>Meu título</h1> */}
      <h1 className={styles.my_title}>Meu título usando CSS Modules</h1>
    </div>
  );
};

export default Title;
