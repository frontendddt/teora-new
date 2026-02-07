"use client";
import styles from "../contact.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const inputs = [
  {
    label: "Full Name",
    type: "text",
    name: "fullName",
    placeholder: "Full Name",
    value: "",
    required: true
  },
  {
    label: "Company / Organisation",
    type: "text",
    name: "company",
    placeholder: "Company / Organisation",
    value: "",
    required: false
  },
  {
    label: "Industry Background",
    type: "select",
    name: "industry",
    options: [
      "Select",
      "Aquaculture / Fisheries",
      "Feed / Hatchery",
      "Agriculture / Livestock",
      "Investor / VC",
      "Media",
      "Research / Academia",
      "Student",
      "Other"
    ],
    value: "",
    placeholder: "Select",
    required: true
  },
  {
    label: "Country",
    type: "text",
    name: "country",
    placeholder: "Country",
    value: "",
    required: false
  },
  {
    label: "Email Address",
    type: "email",
    name: "email",
    placeholder: "Email Address",
    value: "",
    required: true
  },
  {
    label: "What would you like to request or contact us for?",
    type: "checkboxGroup",
    name: "requests",
    options: [
      "Aquaculture Brochure",
      "Company Profile",
      "Investor Deck",
      "Press Information",
      "Trial or product discussion",
      "Distribution or partnership opportunities discussion",
      "Aquaculture Trial or product discussion",
      "Careers / internships",
      "Research collaboration",
      "Newsletter",
      "Other"
    ],
    value: ["Newsletter"],
    required: false
  },
  {
    label: "Message",
    type: "textarea",
    name: "message",
    placeholder: "Tell us a little more about your interest or requirement.",
    value: "",
    required: false
  },
  {
    label: "I agree to be contacted by Teora regarding this enquiry.",
    type: "checkbox",
    name: "consent",
    value: false,
    required: true
  }
];

const ContactForm = () =>
{
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    industry: "",
    country: "",
    email: "",
    requests: ["Newsletter"],
    message: "",
    consent: false,
  });

  const router = useRouter()

  const handleChange = (e) =>
  {
    const { name, value, type, checked } = e.target;

    if (name === "requests")
    {
      setFormData((prev) => ({
        ...prev,
        requests: checked ? [...prev.requests, value] : prev.requests.filter((item) => item !== value),
      }));
      return;
    }

    if (type === 'checkbox')
    {
      setFormData((prev) => ({
        ...prev, [name]: checked,
      }))
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.industry)
    {
      toast.error("Please fill all required fields!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
    try
    {
      setFormLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok)
      {
        console.log(formData)
        router.replace("/contact/thank-you?sent=true");
        console.log("formData :", formData)
        setFormData({
          fullName: "",
          company: "",
          industry: "",
          country: "",
          email: "",
          requests: [],
          message: "",
          consent: false,
        });
      } else
      {
        toast.error(result.error || "Something went wrong.", { position: "top-right", autoClose: 3000, theme: "colored" });
      }

    } catch (error)
    {
      toast.error("Failed to send request.", { position: "top-right", autoClose: 3000, theme: "colored" });
    } finally
    {
      setFormLoading(false);
    }

  }

  return (
    <div className={styles.contact_container}>

      <form onSubmit={handleSubmit}>
        <div className="row text-primaryBeige">
          {
            inputs.map((input, index) =>
            {
              if (input.type === "text" || input.type === "email")
              {
                return <div className="col-md-4 col-sm-6" key={index}>
                  <div className={styles.input_container}>
                    <label>{input.label} {input.required === true ? <span className={styles.requireds}>*</span> : ''}</label>
                    <input
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                      required={input.required}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              }

              if (input.type === "select")
              {
                return <div className="col-md-4 col-sm-6" key={index}>
                  <div className={styles.input_container}>
                    <label>{input.label} <span className={styles.requireds}>*</span></label>
                    <select
                      name={input.name}
                      value={formData[input.name]}
                      required={input.required}
                      onChange={handleChange}>
                      {
                        input.options.map((option, index) =>
                        {

                          return <option disabled={option.length === 0} key={index} value={option}>{option}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
              }

              if (input.type === "checkboxGroup")
              {
                return <div className="col-md-6" key={index}>
                  <div className={styles.input_container}>
                    <label>{input.label}</label>
                    <ul className={`mt-3 p-0 d-flex flex-wrap ${styles.checkbox}`}>
                      {input.options.map((option, index) => (
                        <li key={index} className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            name="requests"
                            value={option}
                            checked={formData.requests.includes(option)}
                            onChange={handleChange}
                          />
                          <label>{option}</label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              }

              if (input.type === "textarea")
              {
                return <div className="col-md-6" key={index}>
                  <div className={styles.input_container}>
                    <label>{input.label}</label>
                    <textarea
                      name={input.name}
                      placeholder={input.placeholder}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              }

              if (input.type === "checkbox")
              {
                return <div className="col-md-12" key={index}>
                  <div className={`d-flex ${styles.input_container}`}>
                    <input
                      type={input.type}
                      name={input.name}
                      required={input.required}
                      checked={formData[input.name]}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="accentLimeColor" style={{ fontSize: "15px" }}>
                      {input.label}
                    </span>
                  </div>
                </div>
              }

            })
          }

          <div className="d-flex justify-content-end">
            <button type="submit"
              className={`${styles.submitbtn} 
                 d-flex align-items-center justify-content-center
                 ${formLoading ? styles.disabledclass : ''}
                 `}
              disabled={formLoading ? true : false}>
              {formLoading ? <span className={styles.loader}></span> : 'Submit'}
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};
export default ContactForm;

