import { RefObject } from "react"

export type TSlider = {
  img: string,
  text: string
}

export type TSignIn = {
  login: string,
  password: string,
}

export type TPublications = {
  'risk-factors': number | null,
  'total-documents': number | null,
  date: string | null
}

export interface IInitialState {
  token: {
    headers: {
      'Content-Type'?: string,
      Authorization: null | string,
    }
  },
  'auth-status': null | string,
  info: {
    eventFiltersInfo: {
      companyLimit: null | number,
      usedCompanyCount: null | number
    }
  },
  publications: null | TPublications[],
  'id-documents': null | string[],
  documents: null | []
}

export interface IState {
  scan: IInitialState
  _persist?: {}
}

export type TInputRef = RefObject<HTMLInputElement> | null;

export type TPropsParametersInput = {
  inn: string,
  numDocuments: string,
  innError: string,
  numDocError: string,
  dateError: string,
  setTonality: (e: string) => void,
  setInn: (e: string) => void,
  setNumDocuments: (e: string) => void,
  setStartDate: (e: string) => void,
  setEndDate: (e: string) => void,
  inputInnRef: TInputRef,
  inputNumDocRef: TInputRef,
  inputStartDateRef: TInputRef,
  inputEndDateRef: TInputRef,
}


export type THistogram = {
  dateStart: string,
  dateEnd: string,
  inn: string,
  tonality: string,
  numDocuments: string
}