import Image from "next/image";
import styles from "./custom.module.css";
import Link from "next/link";

export const ImageCustom = ({ src, alt, className, style, title, discretion, borderRadius }) =>
{
    return (
        <div className={`position-relative ${className}`} style={{ width: '100%', height: '100%', ...style }}>
            <Image
                src={src}
                alt={alt || "image"}
                fill
                className="object-cover"
                priority={false}
                style={{ borderRadius: `${borderRadius}px` }}
            ></Image>

            {title && discretion && (
                <div className={`h3lineHeights ${styles.contents}`}>
                    <div>
                        <h2>{title}</h2>
                        <h3 className="mb-0">
                            {discretion}
                        </h3>
                    </div>
                </div>
            )}
        </div>
    )
}

const HeaderInfo = ({ title, discretion, className, buge, h2color }) =>
{
    return (
        <div className={`pt-2 ${className}`}>
            {buge && (<span className="rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2">{buge}</span>)}
            {title && (
                <h2 className={`${h2color ? h2color : 'text-primaryBeige'}  ${buge ? 'mt-3' : null}`}> {title} </h2>
            )}
            {discretion && (
                <p className="mutedLavenderColor"> {discretion} </p>
            )}
        </div>
    )
}
export default HeaderInfo;

export const Paragraphs = ({ className, discretion }) =>
{
    return (
        <p className={className}>{discretion}</p>
    )
}

export const LinkCustom = ({ label, className, href, label2, className2, href2, p0, target }) =>
{
    return (
        <div className={`${label2 ? "d-flex gap-2 flex-wrap" : ""} ${p0 ? p0 : styles.aboutbannerBtn}`}>
            <Link
                className={className}
                href={href}
                target={target}
            >{label}</Link>
            {label2 && (
                <Link className={className2} href={href2}>{label2}</Link>
            )}
        </div>
    )
}

export const ButtomCustom = ({
    wrapperClass = "",
    btn1,
    btn2,
}) =>
{
    return (
        <div className={wrapperClass}>
            <button className={btn1.className}
                type={btn1.type || "button"}
                onClick={btn1.onClick}
                disabled={btn1.disabled}>
                {btn1.label}
            </button>
            <button
                className={btn2.className}
                type={btn2.type || "button"}
                onClick={btn2.onClick}
                disabled={btn2.disabled}>
                {btn2.label}
            </button>
        </div>
    )
}

export const SectionInfo = ({ titleClass, title, discreption, discreptionClass, infoWrrape }) =>
{
    return (
        <div className={infoWrrape}>
            {title && <h2 className={titleClass}>{title}</h2>}
            {discreption && <p className={`${discreptionClass} mb-0`} style={{ padding: '1.5rem 0' }}>{discreption}</p>}
        </div>
    )
}

export const BugeLink = ({ href, label, className }) =>
{
    <Link
        href={href}
        className={`${className} ${styles.buge}`}
    >{label}</Link>
}

export const Buges = ({ label, extraClass }) =>
{
    return (
        <span className={`rounded-pill buge-style pt-2 pb-2 ${extraClass}`}>
            {label}
        </span>
    )
}