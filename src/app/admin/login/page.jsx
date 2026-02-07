
  'use client';
  import { useState } from 'react';
  import { signIn } from 'next-auth/react';
  import { useRouter } from 'next/navigation';
  import styles from "./login.module.css";
  import { IoEyeOutline, IoEyeOffOutline  } from "react-icons/io5";
   import { toast,ToastContainer } from "react-toastify";
   import 'react-toastify/dist/ReactToastify.css';
  export default function AdminLogin() { 
     const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); 
    const [showPassword, setShowPassword] = useState(false);
 
  async function handleLogin(e) {
    e.preventDefault();
    setError(null); 
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
        setError(res.error);
        toast.error(`LogoIn failed! ${res.error}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });

    } else {  
      router.push('/admin/dashboard'); 
    }
  }

  const handalShowPass = () =>{
    setShowPassword((prev) => !prev);
  }

    return( 
          <section>
                <div className={`main_container tectureBg purpleBg ${styles.fixed_height} overflow-hidden`}>
                      <div className={`row ${styles.fixed_height}`}>
                          <div className="col-md-5 tectureBg purpleBg d-flex justify-content-center align-items-center">
                              <img
                                src="/logo/footer-logo.png"
                                alt="login icon"
                               className={` ${styles.loginLogos}`}
                              />
                          </div>
                           <div className={`col-md-7 h-100 ${styles.login_containers}`}>
                                <div className={`w-100 corporateBg h-100 d-flex justify-content-center align-items-center ${styles.login_containers2}`}>
                                      <div className={`purpleBg tectureBg ${styles.form_card}`}>
                                        <div className={`text-primaryBeige ${styles.logintext}`}>
                                            <p className={`mb-2 ${styles.welcomeBack}`}>Welcome Back!</p>
                                            <p style={{fontSize:'14px'}}>Please enter log in details below</p>
                                        </div>
                                          <form onSubmit={handleLogin}>  
                                              <div className={` ${styles.input_container}`}>
                                                  <label className="form-label text-primaryBeige mb-1">Email</label>
                                                  <input 
                                                    type="email" 
                                                    className="form-control purpleColor"
                                                    placeholder="admin@gmail.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    ></input>
                                                  
                                              </div>

                                              <div className={` ${styles.input_container} position-relative`}>
                                                  <label className="form-label text-primaryBeige mb-1">Password</label>
                                                  <input 
                                                      type={showPassword ? "text" : "password"}
                                                      className="form-control purpleColor "
                                                      placeholder="Password"
                                                      required
                                                      value={password} 
                                                      onChange={(e) => setPassword(e.target.value)}
                                                    ></input>
                                                    
                                                    <span className={` ${styles.showPass}`}
                                                      onClick={handalShowPass}
                                                    >{showPassword ? <IoEyeOffOutline/> : <IoEyeOutline/> }</span>
                                                   
                                              </div> 
                                              <button className={`w-100  ${styles.submit_button}`} type="submit">Login</button>
                                          </form>
                                         
                                      </div>
                                </div>
                                  
                          </div>
                      </div>
                      <ToastContainer/>
                </div>
          </section> 
    )
} 