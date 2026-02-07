  import Image from "next/image";
  const cards = [
    {
      icon:  '/icons/framers2.png',
      title: "FARMERS DESERVE BETTER CHOICES.",
      text: "More Profits. Fewer disease losses, lower feed costs, faster growth cycles better yields.",
      bg: "accentLimebg",
      color: "purpleColor",
      textColor:'midPurpleColor'
    },
    {
      icon: "/icons/framers2.png",
      title: "INJECTIONS DON’T BELONG IN FISH OR ANIMALS",
      text: "and because chemicals or Antibiotics overuse shouldn’t be the cost of growth.",
      bg: "accentRedBg",
      color: "text-primaryBeige",
      textColor:'text-primaryBeige'
    },
    {
      icon: "/icons/margind.png",
      title: "SUSTAINABLE FARMING SHOULDN’T BE A LUXURY",
      text: "It should be the default. Our planet needs balance and we deserve good-clean food.",
      bg: "accentBlueBg",
      color: "purpleColor",
      textColor:'midPurpleColor'
    }
  ];

const ImpactCards = () =>{
 
    return(
        <>
            <div className="row">

                {cards.map((card, i) =>(
                    <div className="col-md-4" key={i}>
                        <div className={`padding2rem borderRadius20 text-center d-flex flex-column justify-content-between solaqCard ${card.bg}`} >
                            <div className="">
                                <Image 
                                    src={card.icon}
                                    width={50} height={50}
                                    alt={card.title}
                                />
                                <h5 className={`${card.color} mt-3`}> {card.title}</h5>
                            </div>
                            <p className={`mb-0 ${card.textColor}`}><strong>{card.text} </strong></p>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}
    export default ImpactCards;