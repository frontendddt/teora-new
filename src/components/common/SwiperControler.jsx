import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const SwiperControler = ({
    swiperRef,
    slideCounter,
    className = "",
}) =>
{
    return (
        <div className={`countscroll text-primaryBeige ${className}`}>
            <div
                className="d-flex justify-content-center align-items-center"
                onClick={() => swiperRef?.current?.slidePrev()}
                style={{ cursor: "pointer" }}
            >
                <MdArrowBackIos size={24} />
            </div>

            <div className="d-flex justify-content-center align-items-center values_border">
                <span>{String(slideCounter).padStart(2, "0")}</span>
            </div>

            <div
                className="d-flex justify-content-center align-items-center"
                onClick={() => swiperRef?.current?.slideNext()}
                style={{ cursor: "pointer" }}
            >
                <MdArrowForwardIos size={24} />
            </div>
        </div>
    );
};

export default SwiperControler;
