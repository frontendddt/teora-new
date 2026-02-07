 
import Styles from "../aboutStypes.module.css";
 
const teamData = [
    {
        memberImg: "aboutAssets/team/rishita.png",
        name: "Rishita Changede",
        designation:"CEO / COMPANY FOUNDER",
        title: "General PhD, MBA,Start-Up’s Human Pharmaceuticals",
        icons: "/aboutAssets/team/teamicon4.png",
    },
    {
        memberImg: "/aboutAssets/team/harish.png",
        name: "Harish Paruvada",
        designation:"GENERAL MANAGER",
        title: "IIT, B2B sales, Human Pharmaceuticals",
        icons: "/aboutAssets/team/teamicon3.png",
    },
    {
        memberImg: "/aboutAssets/team/dhaval.png",
        name: "Dhaval Bamaniya",
        designation:"BUSINESS DEVELOPMENT",
        title: "Aquaculture sales & Research, Healthcare",
        icons: "/aboutAssets/team/teamicon2.png",
    },
    {
        memberImg: "/aboutAssets/team/indra.png",
        name: "Indira Ghosh",
        designation:"BIOINFORMATICS",
        title: "Professor, Bioinformatics Pioneer in Industry & Academia",
        icons: "/aboutAssets/team/teamicon1.png",
    },

]

export const OurTeam = () =>{
    return(
        <>
            <div className="container">
                    <h4 className={`text-white text-center fw-500 ${Styles.awardHeading}`}>Our Award Winning Team </h4> 
                    <div className="row">
                        {
                            teamData.map((team, index) =>(
                                <div className="col-md-3 col-sm-6 col-12 " key={index}>
                                    <div className="p-3 h-100">
                                        <div className={`mutedNeutralBg borderRadius20 mb-3 ${Styles.team_container}`}>
                                            <img
                                                src={team.memberImg}
                                                style={{width:'100%', height:'100%'}}
                                                alt={team.designation}
                                            />  
                                          
                                        </div>
                                        <div className={`text-primaryBeige ${Styles.teamDetails}`}>
                                             <div className={` ${Styles.teams}`}>
                                                    <h3>{team.name}</h3>
                                                    <p>{team.designation}</p> 
                                                    <span className="lightNeutralColor">{team.title}</span> 
                                             </div>
                                            <img
                                                src={team.icons}
                                                alt={team.title}
                                                className="image_sets mt-3 w-100"
                                                style={{borderRadius:'5px', borderRadius:'10px'}}
                                            />
                                        </div> 
                                    </div>
                                </div>
                            ))
                        } 
                    </div> 
                     <div className="rowWhites_2 none768"> </div> 
            </div>    
        
        </>
    )
}