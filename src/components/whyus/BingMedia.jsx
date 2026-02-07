import Innovation from "../about/subComponent/Innovation";
import { LinkCustom } from "../common/Custom";
const BingMedia = () =>
{
    return (
        <>
            <div className="row position-relative" style={{ top: '-50px' }}>
                <div className="col-md-5">
                    <Innovation />
                    <LinkCustom
                        p0="p-0"
                        label="Awards & Recognition"
                        label2="Explore Media"
                        href="/awardsmedia"
                        href2="/awardsmedia"
                        className="buttons-primary"
                        className2="buttons-Beige"
                    />
                </div>
                <div className="col-md-7">
                    <div className="work_media_flow">
                        <h2 className="mutedLavenderColor"> WORK WORTH <br /> BEING IN MEDIA</h2>
                        <img
                            src="/image/work_media1.png"
                            className="w-75"
                            alt="BEING IN MEDIA"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BingMedia;