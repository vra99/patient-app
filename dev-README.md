# Patient App
This is a project that enables the user to update the status of the patient to either `Randomized` or `Inactive`. 

## How to install and start the app?
Run the following command in the terminal:

```
yarn install
```

Then run the following command to start the app:

```
yarn run start
```


## How does the app work?
- First we create a function to fetch the data from data.json file named `fetchData` localised within the /utils folder. 
```ts
export const fetchData = async() => {
    try {
        const data= await fetch(`/patients`);
        const response= await data.json();
        return response
    }
    catch(error){
        return error
    }
}
```
- We use the Context APIs in the /contexts folder to enable us to define the context Object which stores the patients data and the function to update the patient status and will make it available throughout the hierarchy without passing the data as props.

- We set the types for the context to define the schema for the patients data and context structure.
```ts
export interface IPatient   {
    location: {
      locationId: number;
      zip: string;
      city: string;
      state: string;
      countryCode: string,
      geo: {
        latitude: number;
        longitude: number;
      },
      createdAt: Date;
    },
    account: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
    },
    sex: string;
    patientId: 551834;
    status: string;
  }

export interface IPatientContext {
    patients: IPatient[];
    inactivePatients: IPatient[];
    randomizedPatients: IPatient[];
    setStatus: (patientId: number, status: "inactive" | "randomized") => void;
}
```

- Then we use useEffect to execute `fetchData` after the component gets rendered (to “perform side effects”). useEffect can be limited to cases where a selected set of values change. These values are referred to as ‘dependencies’. We then use the `setPatients` function to set the patients to the data fetched from the data.json file. The useState is used to maintain the data response from the data.json in the component.
```tsx
const ContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [patients, setPatients] = useState<IPatient[]>([]);

    useEffect(() => {
      fetchData()
        .then( data => setPatients(data))
        .catch( error => console.log(error))
    }, []);

```

- We then use the `useContext` hook to access the context Object and use the `setStatus` function to update the patients data if they have not been given an status.
```tsx
    const { patients, inactivePatients, randomizedPatients } = useAppContext();
```

- In the App.tsx file we display the main UI of the application. We use our custom `Tabs` component located at /components/Tabs.tsx to display the tabs and patients data dinamically. In the state, we keep track of the active tab index so that you can track which of the tabs is currently active. Inside the tabs section, we loop through the children and display each title in a <button />. On click of the tab button, we set the index as the current active tab. The tab-content section will display the content of the active tab.

```tsx
export const Tabs= React.memo((props: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const activeTab = props.children[activeTabIndex];
  return (
    <Container>
      <div className="tabs">
        {props.children.map((tab: JSX.Element, i: number) => (
          <Button
            onClick={() => {
              setActiveTabIndex(i);
            }}
            key={i}
            color={i === activeTabIndex ? '#00ADB5' : '#697386'}
            style={{
              borderBottom: i === activeTabIndex ? '2px solid #00ADB5' : '',
            }}
          >
            {tab.props.title}
          </Button>
        ))}
      </div>
      <div className="tab-indicator-container">
        <div
          className="tab-indicator"
          style={{
            width: 100 / props.children.length + "%",
            transform: `translateX(${activeTabIndex * 100}%)`
          }}
        />
      </div>
      <CardContainer>
        <div className="box-container">
          <div className="box-1">
            Active Clients 
          </div>
          <div className="box-2"/> 
        </div>
        {activeTab?.props.children}
      </CardContainer>
    </Container>
  );
});
```
```tsx
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
```

## Technologies Used.
- React
- React-Router
- Context API
- Styled-Components
- TypeScript