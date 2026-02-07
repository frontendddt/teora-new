"use client";
import styles from "../contact.module.css";
import Link from "next/link";
export default function RequestGrid() {
  return (
    <>
     <table className={`table table-bordered custom-table text-center mb-0 ${styles.tables1}`}>
            
            <tbody>
                <tr>
                    <td style={{width:"150px"}}>&nbsp;</td>
                    <td colSpan={2}>You can request Aquaculture brochure</td>
                    <td colSpan={2}>You can request Our Company Profile</td>
                    <td colSpan={2}>You can request Investor Deck</td>
                    <td>&nbsp;</td>
                </tr>

                <tr>
                    <td style={{width:"100px"}}>&nbsp;</td>
                    <td colSpan={2}>You can request Press Kit</td>
                    <td colSpan={2}>Enquire about Aquaculture products or trials</td>
                    <td colSpan={2}>You can request Trial reports</td>
                    <td  className="p-1" style={{width:'10%'}}>Research collaboration</td>
                </tr>

                <tr>
                    <td style={{width:"150px"}}>&nbsp;</td>
                    <td colSpan={3}>Enquire about Media / speaking engagement</td>
                    <td colSpan={3}>Enquire Distribution or partnership opportunities</td>
                    <td className="p-1" style={{width:'20%'}}>
                        <Link
                            href="/"
                            className={`buttons-Beige ${styles.tablebtn}`} 
                        >
                        Contact Us
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>

    </>
  );
}
