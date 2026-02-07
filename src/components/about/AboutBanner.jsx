import Styles from './aboutStypes.module.css';
import Link from 'next/link';

const AboutBanner = () =>
{
    return (
        <div className="container container2">
            <div className="col-12">
                <div className='w-100 bgContain576'
                    style={{
                        backgroundImage: `url('/aboutAssets/aboutBran.png')`,
                        backgroundPosition: 'right',
                        height: '100%',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className={`${Styles.aboutheadings}`} >
                        <div className='' style={{ padding: '3rem 0 0 2rem' }}>
                            <h1 className="text-primaryBeige mb-0 f-600" >
                                We Didn’t Start With A <br className='breackDisplay none576' />
                                Product. We Started With A <br className='breackDisplay' />
                                Question—
                                <span className="mutedLavenderColor fw-400"> What if growing <br className='breackDisplay' /> food didn’t mean breaking the
                                    <span className="accentLimeColor"> <br className='breackDisplay' /> planet, </span> our
                                    <span className="accentBlueColor"> health</span>
                                    —or the
                                </span> <span className='fw-400'>farmer?</span>
                            </h1>
                            <div className={`d-flex gap-2 ${Styles.aboutbannerBtn}`}>
                                <Link className="buttons-Beige" href="/">Our Journey</Link>
                                <Link className="buttons-primary border1px" href="/">Why Teora ?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`d-flex justify-content-center  ${Styles.borderMargin}`}>
                <div className='d-flex justify-content-end'>
                    <div className={`d-flex align-items-center text-primaryBeige p-24 ${Styles.borderelements}`} style={{ maxWidth: '700px', }}>
                        <img
                            src="/icons/border.png"
                            width="80" alt="border" />
                        <div className='' style={{ paddingLeft: '1rem' }}>
                            <h6 className='p-24 text-primaryBeige fw-300 mb-2'>
                                Teora was born from that question. Not to fix what
                                was failing—but to build what was missing.
                            </h6>
                            <h6 className='p-24 text-primaryBeige fw-300 mutedLavenderColor  mb-2'>
                                <i> A better way to grow what the world needs. </i>
                            </h6>
                            <h6 className='p-24 text-primaryBeige fw-300 mutedLavenderColor mb-2'>
                                <i>
                                    A smarter way to protect what keeps us alive.
                                </i>
                            </h6>
                            <h6 className='p-24 text-primaryBeige fw-300'>
                                And Something farmers could actually use and the
                                planet wouldn’t have to pay for.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutBanner;