"use client"
import { motion } from "framer-motion";
import { useAnimationContext } from '@/context/AnimationContext';
import { MdOutlineMessage } from "react-icons/md";
import { LinkCustom } from "../common/Custom";
const BlogSection = () =>{
    const {animationVariants, ref1, inView1} = useAnimationContext(); 
      
    return(
        <>
             <motion.div className="container" style={{paddingBottom:'4rem'}}
                        ref={ref1}
                        initial="hidden"
                        animate={inView1 ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >     
                        <div className="d-flex justify-content-end section-space padding_manage  marginBottom">
                            <LinkCustom label="Read All" className="buttons-Beige" p0="p-0" href="/blog">Read All</LinkCustom>
                        </div>  
                        <div className="row"> 
                            <div className="col-md-8 padding_manage h-100">
                                <div className="row"> 
                                    <div className="col-md-6 col-12 mbmd4">
                                        <div className={` card p-3 blogsfooter flex-column-reverse`}>
                                              <div className="blog_buttons d-flex justify-content-end align-items-center">
                                                <button className="msg_box" type="button"> <MdOutlineMessage/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 mbmd4">
                                        <div className={` card p-3 blogsfooter flex-column-reverse`}>
                                             <div className="blog_buttons d-flex justify-content-end align-items-center">
                                                <button className="msg_box" type="button"> <MdOutlineMessage/></button>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                                <div className="pt-4 blog_el" style={{width:'95%'}}>
                                  <h3 className="purpleColor " style={{fontWeight:'600'}}>Teora Blog - Sharp, Useful Reads—From Biotech To Business Of Food.</h3>
                               </div> 
                            </div>  
                             <div className="col-md-4 col-12 padding_manage mbmd4" >
                                <div className={` card p-3 blogsfooter flex-column-reverse `} style={{minHeight:'500px'}} >
                                    <div className="blog_buttons d-flex justify-content-end align-items-center">
                                        <button className="msg_box" type="button"> <MdOutlineMessage/></button>
                                    </div> 
                                </div>
                            </div>
                        </div>  
                    </motion.div> 
        </>
    )
}

export default BlogSection;