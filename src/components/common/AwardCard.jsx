"use client";
import { ImageCustom } from "./Custom";
import { LinkCustom } from "./Custom";
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";

const AwardCard = ({ cardData }) =>
{
    const { fadeDown } = useAnimationContext();
    return (
        <div className="container container2">
            <div className="row">
                {
                    cardData.map((item, index) => (
                        <MotionWrapper className="col-md-4 mb-3" key={index} variant={fadeDown}>
                            <div className="contact_card h-100">
                                <ImageCustom
                                    src={`/image/${item.img}`}
                                    alt=""
                                    style={{ height: '250px' }}
                                />
                                <div className={`card_footer flex-column ${item.links ? '' : 'justify-content-center'} ${item.bg}`}>
                                    <h5 className={item.textColor}>{item.title}</h5>
                                    {item.links && (
                                        <LinkCustom
                                            label={item.linkLabel}
                                            href={item.links}
                                            className="buttons-Beige"
                                        />
                                    )}
                                </div>
                            </div>
                        </MotionWrapper>
                    ))
                }
            </div>
        </div>
    )
}
export default AwardCard;