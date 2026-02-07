import styles from "./custom.module.css";
import Image from "next/image";

const CircalSwiper = ({ data = [], width = 180, height = 180, w100, extraClassul }) =>
{
  return (
    <div className={`position-relative m-auto ${w100}`} style={{ width: "90%" }}>
      <ul className={`list-unstyled d-flex flex-wrap justify-content-center p-0 ${extraClassul} ${styles.cardSwip}`}>
        {data.map((item, i) => (
          <li key={i}>
            <div className={`slickys purpleColor text-primaryBeige`}>
              <div className="d-flex justify-content-center">
                <Image
                  src={item.img}
                  alt="icons"
                  className="mb-2 mb-sm-3 mobileSize_img"
                  width={width}
                  height={height}
                />
              </div>
              <h5 className={styles.title_swip}>{item.title}</h5>
            </div>
          </li>
        ))}
      </ul>

      <div className={`mutedBeigeBg none576 ${styles.rowstyle}`} />
    </div>
  );
};

export default CircalSwiper;
