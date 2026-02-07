
// "use client";
// import styles from "./thankYou.module.css";
// import Image from "next/image";
// import { LinkCustom } from "@/components/common/Custom";

// const ThankYou = () =>
// {

//     return (
//         <section className={`section-space corporateBg ${styles.thankyou_container}`}>
//             <div className="text-center purpleColor">
//                 <Image
//                     src="/icons/email-icon.gif"
//                     width={200}
//                     height={200}
//                     alt="email icon"
//                 />
//                 <h1>Thank You</h1>
//                 <span>Thanks for getting in touch with Teora.</span>
//                 <p>Please check your email for the brochure we’ve sent you. </p>
//                 <LinkCustom
//                     label="Go Home"
//                     className="buttons-primary"
//                     href="/"
//                 />
//             </div>
//         </section>
//     )
// }
// export default ThankYou;
import { redirect } from "next/navigation";
import ThankYou from "./ThankYou";

export default function Page({ searchParams })
{
    if (searchParams?.sent !== "true")
    {
        redirect("/contact");
    }

    return <ThankYou />;
}
