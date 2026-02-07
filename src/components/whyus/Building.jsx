
"use client"
import { useState, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import styles from '../home/slickyComponents/slicky.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const whyUsSwiperData = [
    {
        mainHeading: "FOR FARMERS: GROW MORE. LOSE LESS. STRESS NEVER",
        subHeading1: "HigherYields, Lower Losses,more income",
        discriptions1: "Up to 90% survival in proven aquaculture trials. Reduces disease-driven mortality, ensuring more produce reaches market.",
        subHeading2: "Harvest Faster, Earn Sooner",
        discriptions2: "20% shorter cycles mean 5-6 harvests/year instead of 4. Same pond, more revenue. Less time exposed to disease risk.",
        subHeading3: " Feed Smarter, Cost-Eective Growth",
        discriptions3: " 20% faster growth. better FCR by 0.2 to 0.5 points. When feed costs 60% of your budget, these numbers change everything.",
        subHeading4: "Easy adoption, Shelf stable",
        discriptions4: " No injections. No cold storage. No special training. works all season. Just mix with feed or water and prevent disease.",
        subHeading5: "Easy adoption, Shelf stable",
        discriptions5: "No injections. No cold storage. No special training.works all season.Just mix with feed or water and prevent disease.",
        stresNever: "jhh",
        image: "/image/farm-pepols.png",
        imageTitle: "FARM LIKE THE FUTURE DEPENDS ON IT—BECAUSE IT DOES.",
        bgClass: "accentLimebg",
        colorClass: 'purpleColor'
    },
    {
        mainHeading: " FOR FEED MILLS: PREMIUM PRODUCTS. SIMPLE PROCESS. HIGH MARGINS",
        subHeading1: " Heat-Stable biologics = Pelleting-Ready",
        discriptions1: "Our encapsulation survives pelleting temps. No potency loss. No formula adjustments. It adapts to your existing lines work perfectly.",
        subHeading2: "Offer antibiotic-free, premium feed",
        discriptions2: "Farmers demand it. Regulations require it.Transform commodity feed into premium, clean products~ 20-30% higher margins.",
        subHeading3: "Proven Performance = Customer Loyalty",
        discriptions3: " When farmers see 90% survival and 20% faster growth, they don’t switch suppliers.Your retention rates soar. Loyalty it is.",
        subHeading4: "Align with future-ready regulations",
        discriptions4: " Antibiotic/ chemical bans, What’s that ?  Lead the market shift instead of chasing it. First-mover advantage secured.",
        image: "/image/premium_products.png",
        imageTitle: "FARMERS DEMAND IT. REGULATIONS REQUIRE IT. YOU DELIVER IT.",
        bgClass: "accentBlueBg",
        colorClass: 'purpleColor'
    },
    {
        mainHeading: " FOR DISTRIBUTORS: STOCK THE FUTURE. SKIP THE FREEZER.",
        subHeading1: "No refrigeration = lower logistics cost",
        discriptions1: " Room-temp stable for 24 months. No refrigerated trucks. No storage headaches. No spoilage losses. Just stock, ship, and sell.",
        subHeading2: "Farmer-Friendly = Fast-Moving",
        discriptions2: "No special equipment. Farmers adopt quickly, reorder consistently. Your inventory turnover accelerates by 40-60%.",
        subHeading3: "Clean-label, safe, export-ready food",
        discriptions3: "EU bans? US regulations? Asia standards? One product meets all. Expand territories without regulatory nightmares.",
        subHeading4: " Premium Products,  bigger returns",
        discriptions4: "Antibiotic-free means “expensive.” Not here. Accessible pricing lets you tap both premium buyers AND volume markets.",
        image: "/image/stockthe_future.png",
        imageTitle: "BE THE FIRST TO STOCK THE FUTURE.",
        bgClass: "mutedBeigeBg",
        colorClass: 'purpleColor'
    },
    {
        mainHeading: "For Investors: Scale Meets Science Meets Serious Returns.",
        image: "/image/stockthe_future.png",
        imageTitle: "INVEST IN FEEDING 10 BILLION—PROFITABLY.",
        bgClass: "purpleBg",
        colorClass: 'text-primaryBeige',
        listinvesto: 'listinvesto'
    },
    {
        mainHeading: "FOR MARKET & ENVIRONMENT: SUSTAINABLE FOOD SYSTEMS FOR WORLD",
        subHeading1: "Lowers Carbon Footprint",
        discriptions1: "Reduces waste, feed consumption, and input heavy farming practices.",
        subHeading2: "Minimises Water & Land Use",
        discriptions2: " Supports resource-efficient protein and food production.",
        subHeading3: "Reduces Food Waste",
        discriptions3: "Prevents disease-driven losses that lead to unnecessary culling & spoilage.",
        subHeading4: "Strengthens Global Food Security",
        discriptions4: "Future-proofs farming against climate, disease, scale and supply disruptions.",
        image: "/image/resource_group.png",
        imageTitle: "MEETS RISING DEMAND FOR SUSTAINABLE, ETHICAL FOOD",
        bgClass: "mutedBeigeBg",
        colorClass: 'purpleColor'
    },
    {
        mainHeading: "FOR END CONSUMERS : DELIVERING SAFE, CLEAN & SUSTAINABLE NUTRITION",
        subHeading1: "Antibiotic-Free, Chemical-Free Food",
        discriptions1: "Reduces exposure to harmful residues. builds trust and Meets growing demand for sustainable and ethical sourcing.",
        subHeading2: "Higher-Quality Protein",
        discriptions2: "Supports better nutrition and food security.Reduces antimicrobial resistance risks linked to food systems.",
        subHeading3: " More Aordable, Accessible Food",
        discriptions3: "Lower disease losses = lower production costs, benefiting consumers.",
        subHeading4: "Align with future-ready regulations",
        discriptions4: "Antibiotic/ chemical bans, What’s that ? Lead the market shift instead of chasing it. First-mover advantage secured.",
        image: "/image/natiration.png",
        imageTitle: "FARMERS DEMAND IT. REGULATIONS REQUIRE IT. YOU DELIVER IT.",
        bgClass: "mutedBeigeBg",
        colorClass: 'purpleColor'
    },
]



const Building = () =>
{
    const [slideCounter, setSlideCounter] = useState(1);
    const swiperRef = useRef(null);
    return (
        <div>
            <div className=" d-flex justify-content-between align-items-center">
                <div>
                    <h2 className="m-top-b h1500 h11536 text-primaryBeige">Building A Global Food System That Works For Everyone</h2>
                </div>
                <div className={`${styles.countscroll}`}>
                    <div
                        className='d-flex justify-content-center align-items-center text-primaryBeige'
                        style={{ cursor: "pointer" }}
                        onClick={() => swiperRef.current.slidePrev()}
                    > <MdArrowBackIos size={24} /></div>

                    <div className={`d-flex justify-content-center align-items-center text-primaryBeige ${styles.values}`}><span>
                        {String(slideCounter).padStart(2, "0")}
                    </span></div>

                    <div
                        className='d-flex justify-content-center align-items-center text-primaryBeige'
                        style={{ cursor: "pointer" }}
                        onClick={() => swiperRef.current.slideNext()}
                    ><MdArrowForwardIos size={24} /></div>
                </div>
            </div>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setSlideCounter(swiper.realIndex + 1)}
                spaceBetween={20}
            >
                {
                    whyUsSwiperData.map((el, index) => (
                        <SwiperSlide>
                            <div className={`${el.bgClass} ${styles.slickyWhyus} slide_containe p-0 overflow-hidden`}>
                                <div className="row h-100">
                                    <div className="h-100 slicky100" style={{ width: '80%' }}>
                                        <div className='whyusPadding h-100'>
                                            <div className='p_around h-100 d-flex flex-column justify-content-between'>
                                                <div>
                                                    <span>
                                                        <p className={`${el.colorClass}`}>{index + 1}/05</p>
                                                    </span>
                                                    <h5 className={`mt-0 mt-md-3 mb-2 ${el.colorClass}`}>
                                                        {el.mainHeading}
                                                    </h5>
                                                </div>
                                                <div className={`${el.stresNever ? 'd-flex w-100 flex-wrap' : ''} `}>
                                                    <div className={`${el.stresNever ? 'w-75 slicky100' : ''} `}>
                                                        {
                                                            el.listinvesto ?
                                                                <div className="card_contaoiner_flex">
                                                                    <div className='w-50 slicky100 text-primaryBeige'>
                                                                        <p className='refrange_headings text-center corporateBg purpleColor mb-0'>
                                                                            A Multi-Billion Dollar Market Opportunity</p>
                                                                        <p className='pt-1 mt-md-3 descre pb-1 pb-md-3 fw-500 mb-2' style={{ fontSize: '13.5px' }}>
                                                                            Teora addresses an underserved $573 billion aquaculture industry, expanding into a $193 billion sustainable biologics market. Its adaptable platform extends beyond aquaculture into livestock, poultry, and crops—maximizing commercial scalability and investor potential
                                                                        </p>
                                                                        <ul className="m-0 p-0 list-unstyled d-flex justify-content-between">
                                                                            {[
                                                                                {
                                                                                    title: "Expanding product",
                                                                                    subtitle: "pipeline in Aquaculture",
                                                                                    value: "+10",
                                                                                    footer: "Products",
                                                                                },
                                                                                {
                                                                                    title: "On Path to Reach",
                                                                                    subtitle: "Revenue by yr 2026",
                                                                                    value: "+$25M",
                                                                                    footer: "From Three Products",
                                                                                },
                                                                                {
                                                                                    title: "Poultry Agriculture,",
                                                                                    subtitle: "Livestock & Pet Health",
                                                                                    value: "+4",
                                                                                    footer: "Expanding in Industries",
                                                                                },
                                                                            ].map((item, index) => (
                                                                                <li key={index} className="listPAddings descre">
                                                                                    <p
                                                                                        className="m-0"
                                                                                        style={{ fontSize: "11px", borderBottom: "1px solid #AACC57" }}
                                                                                    >
                                                                                        {item.title} <br /> {item.subtitle}
                                                                                    </p>
                                                                                    <p className="mb-1">{item.value}</p>
                                                                                    <p style={{ fontSize: "11px" }}>{item.footer}</p>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>

                                                                    <div className='w-50 slicky100'>
                                                                        <p className='refrange_headings text-center corporateBg purpleColor mb-0'>Disruptive Technology with Cross-Industry Potential</p>
                                                                        <p className='descre pt-3  pb-1 pb-md-3 fw-500 mb-2 text-primaryBeige' style={{ fontSize: '13.5px' }}>
                                                                            SOLAQ™ is not just an aquaculture solution—it is a
                                                                            biotech platform with applications in agriculture,
                                                                            livestock, and even plant disease prevention, offering
                                                                            investors long-term scalability in the food sector.
                                                                        </p>
                                                                        <p style={{ fontSize: '16.5px' }} className='descre fw-500 mb-2 text-primaryBeige'>
                                                                            The Liveability Challenge 2023 Winner ($1M prize)
                                                                            Global Shrimp Summit 2024 Innovation Award
                                                                            Berkeley SkyDeck & Hatch Innovation Studio Alumni
                                                                            UN SDG Challenge Finalist
                                                                        </p>
                                                                    </div>

                                                                </div> :

                                                                <div>
                                                                    {[
                                                                        [
                                                                            {
                                                                                heading: el.subHeading1,
                                                                                description: el.discriptions1,
                                                                                headingClass: "mb-0",
                                                                            },
                                                                            {
                                                                                heading: el.subHeading2,
                                                                                description: el.discriptions2,
                                                                                headingClass: "mb-0",
                                                                            },
                                                                        ],
                                                                        [
                                                                            {
                                                                                heading: el.subHeading3,
                                                                                description: el.discriptions3,
                                                                                headingClass: "mb-1",
                                                                            },
                                                                            {
                                                                                heading: el.subHeading4,
                                                                                description: el.discriptions4,
                                                                                headingClass: "mb-1",
                                                                            },
                                                                        ],
                                                                    ].map((row, rowIndex) => (
                                                                        <div key={rowIndex} className="card_contaoiner_flex">
                                                                            {row.map((item, index) => (
                                                                                <div key={index} className="max_width_card">
                                                                                    <p
                                                                                        className={`refrange_headings text-center text-primaryBeige purpleBg ${item.headingClass}`}
                                                                                    >
                                                                                        {item.heading}
                                                                                    </p>

                                                                                    <p
                                                                                        className="descre text-center fw-500 mb-2 purpleColor"
                                                                                        style={{ fontSize: "15.5px" }}
                                                                                    >
                                                                                        {item.description}
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                        }

                                                    </div>
                                                    {
                                                        el.stresNever ?
                                                            <div className="w-25 slicky100" style={{ paddingLeft: '10px' }}>
                                                                <p className='refrange_headings purpleBg text-center text-primaryBeige mb-0'>
                                                                    Premium  Price, Zero Residue, Compliant</p>
                                                                <p className='p-0 p-md-2 text-center fw-500 descre' style={{ fontSize: '15.5px' }}> No
                                                                    antibiotics = export ready stock. Access premium markets demanding clean
                                                                    food. Get 15-30% higher prices for the same farmed produce.
                                                                </p>
                                                            </div> : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-100 slicky100 none768" style={{ width: '20%' }}>
                                        <div className='d-flex justify-content-end position-relative' style={{ height: '100%' }}>
                                            <Image src={el.image} fill alt={el.mainHeading}
                                                className='border_radius_round2' />
                                            <p className='onimage_text text-white'>{el.imageTitle}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }

            </Swiper>
        </div>
    )
}
export default Building;