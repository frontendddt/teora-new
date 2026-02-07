import "./grids.css";
import Image from "next/image";
const ProtectingGrid = () =>
{
    return (
        <div className="bee-grid position-relative">
            <div className="card yellowbg yellowcard purpleColor a">
                <h4>
                    Honeybees and shrimp share something fundamental:
                    both are invertebrates without adaptive immunity.
                </h4>
            </div>

            <div className="card card-outline purpleColor bg-transparent b">
                <div className="d-flex gap-2">
                    <Image
                        src="/icons/fe-1.webp"
                        width={40}
                        height={50}
                        alt=" Honeybees and shrimp share something"
                    />
                    <p className="text-center m-0" style={{ fontSize: '16px' }}>
                        <strong className="text-center">Yet Scientists Discovered That
                            Bees Can Develop Memory-
                            Like Protection</strong>
                    </p>
                </div>
                <p className="m-0" style={{ fontSize: 15 }}>
                    using natural molecular signals and
                    epigenetic priming to train their defences
                    across generations.
                </p>
            </div>

            <div className="card card-outline purpleColor bg-transparent c">
                <h4>
                    If Bees Can Be Trained
                    To Defend Better, Why
                    Not Shrimp?
                </h4>
            </div>

            <div className="card card-outline bg-transparent d">
                <p className="mb-0"><strong>This Insight Is The Foundation Of Our Approach.</strong></p>
            </div>

            <div className="card card-outline e bg-transparent">
                <div className="d-flex">
                    <Image
                        src="/image/aqua-icon.png"
                        width={100}
                        height={70}
                        alt="Insight"
                    />
                    <p style={{ fontSize: 15 }}><strong>Instead Of Forcing Vertebrate Medicine Onto Invertebrate Biology…</strong></p>
                </div>
            </div>

            <div className="card card-dark card-outline purpleBg lastpurpalcard f">
                <p><strong>We Work With What Shrimp Already Does Well:</strong></p>
                <ul>
                    <li>Priming innate defences</li>
                    <li>Supporting them through stress windows</li>
                    <li>and delivering protection through the feed
                        they already eat.</li>
                </ul>
                <p style={{ fontSize: 15 }} className="m-0">From reactive to proactive. From chemicals
                    to biology. From borrowed science to
                    biology-ﬁrst design.</p>
            </div>
        </div>
    )
}
export default ProtectingGrid;