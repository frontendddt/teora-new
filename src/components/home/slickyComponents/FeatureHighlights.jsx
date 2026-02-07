
 
import styles from './slicky.module.css';  
const features = [
  {
    icon: "/icons/Species.svg", 
    text: "Species-Specific Targeting – Made for shrimp, fish & their pathogens. No broad-spectrum guesses.",
  },
  {
    icon: "/icons/Needle.svg",
    text: "Feed-Based & Needle-Free – Just mix into feed. No injections. No cold chains. No stress.",
  },
  {
    icon: "/icons/Stable.svg",
    text: "Room-Temp Stable – Built for any farm, anywhere. Shelf-stable in any climate. Zero refrigeration.",
  },
  {
    icon: "/icons/antibiotics.svg",
    text: "100% Clean – No antibiotics. No residues. Safe for people, planet, and global trade.",
  },
];  
const FeatureHighlights = () => { 
  return (
    <> 
        {
           features.map((feture, index) =>{
                return(
                    <div className={`col-md-3 col-sm-6 col-12 ${styles.border_rignt1} ${index === features.length - 1 ? "" : styles.border_rignt}`} key={index}>
                        <div className={`d-flex gap-3 align-items-center text-primaryBeige h-100 `}>
                            <img
                                src={feture.icon}
                                alt="Targeting- Made"
                                width={100}
                                height={100}
                            />
                            <p>{feture.text}</p>
                        </div>
                    </div>  
                )
           }) 
        } 
    </>
    
     
  );
};

export default FeatureHighlights;
