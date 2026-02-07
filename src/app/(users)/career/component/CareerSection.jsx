"use client"
import styles from "../career.module.css";
import Link from "next/link";
import { Paragraphs } from "@/components/common/Custom";
import { useState, useEffect } from "react";

const CareerSection =  () =>{
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchJobs = async () =>{
         try{
            setLoading(true);
            const res = await fetch('/api/jobs');
            const data = await res.json(); 
            setJobs(data.filter(job => job.is_active === 1));
         }catch(error){
            console.log(error);
         }finally{
            setLoading(false);
         }
    };
    useEffect(() =>{
        fetchJobs();
    },[])

    return(
        <div className="container container2 purpleColor"> 
            <h2 className="text-center">Open Positions</h2>
            <Paragraphs
                className="text-center"
                discretion="Here is the list of open positions that we are currently hiring."
            /> 
            {loading &&(
                <p className="text-center"><strong>Loading...</strong></p>
            )}
            
            <div className="row mt-5">
                { jobs.length === 0 && <h5 className="text-center">No job openings are available at this time.</h5> }
                {
                    jobs.map((item) =>{ 
                         return(
                            <div className="col-md-4 mb-3" key={item.id}>
                                <Link href={`career/${item.slug}`}>
                                    <div className={`purpleColor ${styles.opening_job}`}>
                                        <h5 className="mb-2 text-capitalize">{item.title}</h5>
                                        <p className="mb-0 "><span className="fw-500">Job Shift:</span> {item.shift}</p>
                                        <p className="mb-0"><span className="fw-500">Salary: </span> {item.min_salary} To {item.max_salary}</p>
                                        <p className="mb-0"><span className="fw-500">Adress:</span> {item.address}</p>
                                    </div>
                                </Link> 
                            </div>
                         ) 
                    })
                }  
                 
            </div>
        </div>
      
    )
}
export default CareerSection;