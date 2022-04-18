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
