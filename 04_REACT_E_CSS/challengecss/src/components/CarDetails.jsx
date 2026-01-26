import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, model, km, isNew }) => {
  return (
    <div className={styles.car_details}>
      <h2>{brand}</h2>
      <p>{model}</p>
      <p>{`${km}km`}</p>
      {isNew && <p>O carro é novo!</p>}
    </div>
  );
};

export default CarDetails;
