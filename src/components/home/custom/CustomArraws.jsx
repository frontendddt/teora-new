import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import Styles from "../home.module.css"

export const PrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className={`${Styles.handalPrev} purpleColor`}>
       <MdArrowBackIosNew size={24} />
    </div>
  );
};

export const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${Styles.handalNext} purpleColor`}
    >
      <MdArrowForwardIos size={24} />
    </div>
  );
};
