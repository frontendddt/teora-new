
"use client"
import { useAnimationContext } from "@/context/AnimationContext";
import { MotionWrapper } from "@/context/MotionWrapper";
import { LinkCustom } from "../common/Custom";
import styles from "./whyUS.module.css";
import { FaRegCheckSquare } from "react-icons/fa";
import { ImageCustom } from "../common/Custom";
const tableData = [
    {
        sector: 'Aquaculture',
        focus: 'Shrimp, Finfish – Disease + Growth',
        status: 'Scaling Now',
    },
    {
        sector: 'Livestock',
        focus: 'Swine Fever,\nRuminant Disease',
        status: 'R&D Phase',
    },
    {
        sector: 'Crops',
        focus: 'Plant Immunity Boosters,\nRoot Health',
        status: 'Under Validation',
    },
    {
        sector: 'Poultry',
        focus: 'Disease Resistance + Growth',
        status: 'Pre-Launch',
    },
    {
        sector: 'Companion Health',
        focus: 'Gut Immunity,\nWellness Boosters',
        status: 'In Development',
    },
];
const Aquaculture = () =>
{
    const { fadeLeft, fadeRight } = useAnimationContext();
    return (
        <>
            <div className="container container2">
                <div className="section-space-2">
                    <div className="row">
                        <MotionWrapper className="col-md-6"
                            variant={fadeLeft}
                        >
                            <div className="table-wrapper mb-3 mb-sm-0">
                                <table className={styles.sector_table}>
                                    <thead>
                                        <tr>
                                            <th>Sector</th>
                                            <th>Key Focus</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((row, idx) => (
                                            <tr key={idx}>
                                                <td><em>{row.sector}</em></td>
                                                <td><em>{row.focus}</em></td>
                                                <td><em>{row.status}</em></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </MotionWrapper>
                        <MotionWrapper className="col-md-6 d-flex flex-column justify-content-between"
                            variant={fadeRight}
                        >
                            <div className="stopping-container paddingLeft">
                                <span className="rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2">WHERE WE’RE HEADED</span>
                                <div className="purpleColor">
                                    <h2 className="m-top-b">
                                        And We’re Not Stopping At Aquaculture.
                                    </h2>
                                    <p>Want to adopt our solutions? Distribute? Collaborate?</p>
                                    <p>
                                        Whether you’re a farmer, feed mill, distributor, or partner looking to
                                        scale impact, Teora offers flexible ways to plug into our platform
                                    </p>
                                    <p className="mb-2"><b>1) B2B Sales & Distribution</b></p>
                                    <p className="mb-2"><b>2) Licensing Partnerships</b></p>
                                    <p><b>3) Co-Development & Custom Solutions</b></p>
                                </div>
                                <LinkCustom href="" className="buttons-primary" label="Know More" />
                            </div>
                        </MotionWrapper>
                    </div>
                </div>

                <div className="section-space-2 pt-0 pt0-768">
                    <div className="row">
                        <MotionWrapper className="col-md-6 d-flex flex-column justify-content-between "
                            variant={fadeLeft}
                        >
                            <div className="stopping-container">
                                <div className={`purpleColor ${styles.checksele}`}>
                                    <h2 className=" m-top-b">
                                        WHY NOW? BECAUSE TOMORROW IS TOO LATE.
                                    </h2>
                                    <p className="mb-2">
                                        When farmers win, the food system wins. And so does the
                                        world. We’re not another biotech with slides and slogans,
                                        We’re boots-on-ground in ponds, farms, and feed mills—
                                        building a food system that works for:
                                    </p>
                                    <p className="mb-2"><span><FaRegCheckSquare /></span> Farmers who deserve better margins </p>
                                    <p className="mb-2"><span><FaRegCheckSquare /></span> Consumers who want cleaner food  </p>
                                    <p className="mb-2"><span><FaRegCheckSquare /></span>  Regulators demanding residue-free systems  </p>
                                    <p className="mb-2"><span><FaRegCheckSquare /></span> Distributors seeking product stickiness</p>
                                    <p className="mb-2"><span><FaRegCheckSquare /></span> A planet stretched to its limits</p>
                                </div>
                            </div>
                            <LinkCustom href="/contact"
                                className="buttons-primary"
                                label="Contact Us Now" />

                        </MotionWrapper>
                        <MotionWrapper className="col-md-6"
                            variant={fadeRight}
                        >
                            <div className="card1 p_smarter purpleBg text-primaryBeige border_radius_round2 mb-4 d-flex align-items-center gap-3 ">
                                <span>
                                    <ImageCustom
                                        src="/icons/Needle.svg"
                                        alt={"icons"}
                                        style={{ width: 120, height: 120 }}
                                    />
                                </span>
                                <div className="m-0">
                                    <span className="rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2">
                                        THE SOLUTION IS CLEAR
                                    </span>
                                    <p className={`mt-3 ${styles.solutionsElements}`}>
                                        Clean Science. Smart Biologics. Easy Adoption. Sustainable Scaling.
                                    </p>
                                </div>
                            </div>

                            <div className="card1 p_smarter purpleBg text-primaryBeige border_radius_round2 mb-4 ">
                                <div className="m-0">
                                    <span className="rounded-pill buge-style accentRedBg text-primaryBeige pt-2 pb-2">
                                        THE CHOICE IS YOURS
                                    </span>
                                    <p className={`mt-3 ${styles.solutionsElements}`}>
                                        Keep Fighting Disease With Yesterday’s Tools—Or Feed The Future With Tomorrow’s Science.
                                    </p>
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aquaculture;