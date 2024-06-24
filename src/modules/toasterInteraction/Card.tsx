import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);

const Card = () => {
  const [isRotate, setIsRotate] = useState<boolean>(false);
  return (
    <>
      <div className={cx("box")}>
        <div className={cx("tag", isRotate ? "is-rotate" : "is-reset")}>
          <div className={cx("front")}>titletitle</div>
          <div className={cx("back")}></div>
        </div>

        <div
          className={cx("card", isRotate ? "is-large" : "is-reset")}
          onClick={() => {
            setIsRotate(!isRotate);
          }}
        >
          <strong className={cx("title")}>title</strong>
          <p className={cx("preview")}>
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            officia possimus maiores totam sequi esse quas culpa autem doloribus
            vel delectus, et minus id eligendi nemo nam debitis! Consectetur,
            necessitatibus!
          </p>
        </div>
        <div className={cx("popup", isRotate ? "is-show" : "is-reset")}>
          <div className={cx("inner", isRotate ? "is-show" : "is-reset")}>
            <button
              type="button"
              className={cx("btn-close")}
              onClick={() => {
                setIsRotate(!isRotate);
              }}
            >
              X
            </button>
            <strong className={cx("title")}>title</strong>
            <p className={cx("txt")}>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error officia possimus maiores totam sequi esse quas culpa autem
              doloribus vel delectus, et minus id eligendi nemo nam debitis!
              Consectetur, necessitatibus!
            </p>
            <p className={cx("txt")}>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error officia possimus maiores totam sequi esse quas culpa autem
              doloribus vel delectus, et minus id eligendi nemo nam debitis!
              Consectetur, necessitatibus!
            </p>
            <p className={cx("txt")}>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error officia possimus maiores totam sequi esse quas culpa autem
              doloribus vel delectus, et minus id eligendi nemo nam debitis!
              Consectetur, necessitatibus!
            </p>
            <p className={cx("txt")}>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error officia possimus maiores totam sequi esse quas culpa autem
              doloribus vel delectus, et minus id eligendi nemo nam debitis!
              Consectetur, necessitatibus!
            </p>
            <p className={cx("txt")}>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error officia possimus maiores totam sequi esse quas culpa autem
              doloribus vel delectus, et minus id eligendi nemo nam debitis!
              Consectetur, necessitatibus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
