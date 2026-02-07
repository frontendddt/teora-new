const StickySections = ({
    children,
    zIndex = 1,
    bgImage,
    extraClass = "",
    style = {},
}) =>
{
    return (
        <div
            className={`sticky-top section-space-2 sticky_section z-${zIndex} ${extraClass}`}
            style={{
                ...(bgImage && {
                    backgroundImage: `url(${bgImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                }),
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default StickySections;
