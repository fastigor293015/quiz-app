import clsx from "@/utils/clsx";
import styles from "./card.module.css";

const Card = ({
  img,
  imgPosition = "top-right", // "top-right" | "top-center"
  title,
  description,
  textAlign = "center",
  className,
  titleClassName,
  children
}) => {
  return (
    <section className={clsx(styles.content, className)}>
      {img && <img className={clsx(styles.img, imgPosition === "top-right" && styles.topRight, imgPosition === "top-center" && styles.topCenter)} src={img} alt='Иллюстрация' />}
      {(title || description) && (
        <div className={clsx(styles.textContent, textAlign === "center" && styles.center)}>
          {title && (
            <h2 className={clsx(styles.title, titleClassName)}>{title}</h2>
          )}
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export default Card;