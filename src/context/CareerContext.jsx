import { createContext, useContext, useState } from "react";

const careerContext = createContext();

export const CareerProvider = async () =>
{
    const [loading, setLoading] = useState(false)
    const fetchdata = async () =>
    {
        try
        {
            setLoading(true)
            const res = await fetch('/api/jobs')
            let data = await res.json();
        } catch (error)
        {
            console.log(error);
        } finally
        {
            setLoading(false)
        }
    }
    return (
        <careerContext.Provider
            value={{

            }}
        >

        </careerContext.Provider>
    )
}
