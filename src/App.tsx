import React from 'react'
import styled from 'styled-components';
import { Tabs, Card } from './components'
import { useAppContext } from "./contexts";
import { IPatient } from "./types";

const Container = styled.div`
    width: 75%;
    margin: 100px auto !important;
  
    button {
        all: unset;
        cursor: pointer;
    }
`;


const App = () => {
    const { patients, inactivePatients, randomizedPatients } = useAppContext();

    const Patients= React.useMemo(() => ({patient}: any) => {
        return patient && patient.map(( data: IPatient) => (
            <Card patient= {data} key={data.patientId}/>
        ));
    }, []);

    console.log(patients);

  return (
      <Container>
          <div>
              <h1> Patients </h1>
          </div>
          { patients.length &&
            <Tabs>
              <div title={`Inactive(${inactivePatients.length})`}>
                  <Patients patient={inactivePatients} />
              </div>
              <div title={`Randomized(${randomizedPatients.length})`}>
                  <Patients patient={randomizedPatients} />
              </div>
              <div title={`All(${patients.length})`}>
                  <Patients patient={patients} />
              </div>
            </Tabs>
        }
      </Container>
  )
}  

export default App