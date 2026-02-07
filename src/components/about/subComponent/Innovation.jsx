import Styles from "../stickyAbout.module.css";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";


const Innovation  = () =>{
    return(
        <> 
             <div className="card-conatiner">
                    <div className={`mutedBeigeBg mb-3 ${Styles.aboutCardBox} purpleColor`}>
                        <div className="d-flex">
                            <div>
                                <h6 className={Styles.aboutCardtext}>Teora -"One of the 10 Biotech Startups Rewriting The Future Of Food.”</h6> 
                                <span className={Styles.asiaOne}>- AsiaOne</span> 
                            </div>
                            <div style={{width:'150px'}} className="d-flex justify-content-end align-items-end">
                                <Link href="#" className="round_arrow hovers">
                                    <span className="inlineblockrow">
                                        <FaLongArrowAltRight className={`${Styles.arrows}`}/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`purpleBg mb-3 ${Styles.aboutCardBox} text-primaryBeige`}>
                        <div className="d-flex flex-wrap flex-sm-nowrap">
                            <div style={{paddingRight:'1rem'}}>
                                <h6 className={Styles.aboutCardtext}> Global Shrimp Summit 2024 - Innovation Award</h6> 
                                <span className={Styles.asiaOne}> Teora received the innovation Award, acknowledging its advancements in shrimp farming technologies</span> 
                            </div>
                            <div style={{width:'150px'}} className="d-flex justify-content-end align-items-end position-relative">
                                <img
                                    src="/aboutAssets/innovation.png"
                                    alt="Teora received the innovation" 
                                />
                                <Link href="#" className={`round_arrow hoversBgBeige ${Styles.innovationBtn}`}>
                                    <span className="inlineblockrow">
                                        <FaLongArrowAltRight className={`${Styles.arrows}`}/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`mutedBeigeBg mb-3 ${Styles.aboutCardBox} purpleColor`}>
                        <div className="d-flex">
                            <div>
                                <h6 className={Styles.aboutCardtext}>Inventures 2023 – Agri Category Winner</h6> 
                                <span className={Styles.asiaOne}> Teora Secured the top position, highlighting its groundbreaking solutions in the agritech sector</span> 
                            </div>
                            <div style={{width:'150px'}} className="d-flex justify-content-end align-items-end">
                                <Link href="#" className="round_arrow hovers">
                                    <span className="inlineblockrow">
                                        <FaLongArrowAltRight className={`${Styles.arrows}`}/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

            </div>
        
        </>
    )
}
    export default Innovation;