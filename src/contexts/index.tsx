import React, { createContext, FC, PropsWithChildren, useContext, useState, useEffect } from "react";
import { fetchData } from '../utils'
import { IPatient, IPatientContext } from "../types";

const AppContext = createContext<IPatientContext>({
    patients: [],
    randomizedPatients: [],
    inactivePatients: [],
    setStatus: () => { },
});

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a ContextProvider');
    }
    return context;
}

const ContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [patients, setPatients] = useState<IPatient[]>([]);
     
    const inactivePatients= patients.length ? patients.filter(patient => patient.status === "inactive") : patients;

    const randomizedPatients= patients.length ? patients.filter(patient => patient.status === "randomized") : patients;

    const setStatus = (patientId: number , status : "inactive" | "randomized") => {
        const newPatients = patients?.map(patient => {
            if (!patient.status && patient.patientId === patientId) {
                patient.status = status;
            }
            return patient;
        });
        setPatients(newPatients);
    }

    useEffect(() => {
      fetchData()
        .then( data => {
            setPatients(data)
        })
        .catch( error => console.log(error))
    }, []);


    return (
        <AppContext.Provider value={{ patients, inactivePatients, randomizedPatients, setStatus }}>
            {children}
        </AppContext.Provider>
    );
}

export { ContextProvider }
