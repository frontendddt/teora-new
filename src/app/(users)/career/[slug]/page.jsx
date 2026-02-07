
  import styles from "../career.module.css";
  import NotFoundPage from "@/components/notFoundPage/NotFoundPage";
  import { ImageCustom } from "@/components/common/Custom";
  import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
  import Link from "next/link";
  import Image from "next/image";

  const getJob = async (slug) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/jobs`, {
      cache: "no-store",
    });
    const jobs = await res.json(); 
    return jobs.find(job => job.slug === slug);
  }
 
  const CareerDetails = async ({ params }) =>{
    const job = await getJob(params.slug);
    if (!job) return <NotFoundPage/>;
 
    return(
        <>
          <section> 
              <div className="position-relative w-100" style={{height:350}}>
                   <Image
                        src="/bgImage/soluq-bg.jpeg" 
                        fill
                        alt="career banner"
                        style={{objectFit: "cover"}}
                    />
              </div> 
        </section>
        <section className="section-space corporateBg">
            <div className="container">
                 <div className={`card  ${styles.careerCard}`}>
                        <div className="d-flex gap-4 flex-wrap ">
                              <div className={styles.careerlogo}>
                                 <ImageCustom
                                    src="/logo/teora-logo2.png" 
                                 />
                              </div>
                              <div className={`purpleColor ${styles.jobtitles}`}>
                                    <h4 className="text-capitalize">{job.title}</h4>
                                    <div className={`d-flex gap-4 flex-wrap mt-2 align-items-center ${styles.jobinfo}`}>
                                        <span><CiLocationOn/> {job.address}</span>
                                        <span className={`text-capitalize ${styles.jobshift}`}>{job.shift}</span> 
                                    </div>
                                    <div className={`mt-2 ${styles.jobinfo}`}>
                                         <span><CiCalendarDate/> Post Date: {
                                            new Date(job.created_at)
                                            .toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                            })}
                                          </span>
                                    </div>
                              </div>
                          </div>
                          <hr/>

                          <div className={styles.job_details}>
                                 <h5 className="mb-2">Job Description</h5> 
                                  <div
                                    dangerouslySetInnerHTML={{ __html: job.description }}
                                  />

                                   <p className="purpleColor">Drop your resume at this email:{" "}
                                    <Link href="mailto:info@teoralife.com">info@teoralife.com</Link>
                                  </p>
                          </div>
                 </div>
            </div>
        </section>
       </>
    )
  }
export default CareerDetails;