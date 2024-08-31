import { SyntheticEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPublications } from "../store/extraReducers";
import { useAppDispatch } from "../store/types";
import { TInputRef } from "../types";
import { validateDate, validateInn, validateNumDocuments } from "./UseValide";



export default function UseSearchPage() {

  const [inn, setInn] = useState('7710137066');
  const [tonality, setTonality] = useState('any');
  const [numDocuments, setNumDocuments] = useState('');
  const [dateStart, setStartDate] = useState('');
  const [dateEnd, setEndDate] = useState('');

  const [innError, setInnError] = useState('');
  const [numDocError, setNumDocError] = useState('');
  const [dateError, setDateError] = useState('');

  const inputInnRef = useRef() as TInputRef;
  const inputNumDocRef = useRef() as TInputRef;
  const inputStartDateRef = useRef() as TInputRef;
  const inputEndDateRef = useRef() as TInputRef;

  const { isValidate, messageValidate } = validateInn(inn);
  const { isValNumDoc, mesValNumDoc } = validateNumDocuments(numDocuments);
  const { isValidateDate, mesValidateDate } = validateDate(dateStart, dateEnd)

  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const onSubmitSearch = (event: SyntheticEvent) => {
    event.preventDefault();

    if (inputInnRef?.current) {
      let sInn = inputInnRef.current.nextElementSibling as HTMLElement;
      if (isValidate === false) {
        setInnError(messageValidate);
        inputInnRef.current.style.borderColor = 'rgba(255, 89, 89, 1)';
        sInn.style.display = 'block';
      } else {
        setInnError('');
        inputInnRef.current.style.borderColor = 'rgba(199, 199, 199, 1)';
        sInn.style.display = 'none';
      }
    }

    if (inputNumDocRef?.current) {
      let sNumDoc = inputNumDocRef.current.nextElementSibling as HTMLElement;
      if (isValNumDoc === false) {
        setNumDocError(mesValNumDoc);
        inputNumDocRef.current.style.borderColor = 'rgba(255, 89, 89, 1)';
        sNumDoc.style.display = 'block';
      } else {
        setNumDocError('');
        inputNumDocRef.current.style.borderColor = 'rgba(199, 199, 199, 1)';
        sNumDoc.style.display = 'none';
      }
    }
    if (inputStartDateRef?.current && inputEndDateRef?.current) {
      let sDate = (inputEndDateRef.current.parentNode as HTMLElement).nextElementSibling as HTMLElement;


      if (isValidateDate === false) {
        setDateError(mesValidateDate);
        inputStartDateRef.current.style.borderColor = 'rgba(255, 89, 89, 1)';
        inputEndDateRef.current.style.borderColor = 'rgba(255, 89, 89, 1)';
        sDate.style.display = 'block';
      } else {
        setDateError('');
        inputStartDateRef.current.style.borderColor = 'rgba(199, 199, 199, 1)';
        inputEndDateRef.current.style.borderColor = 'rgba(199, 199, 199, 1)';
        sDate.style.display = 'none';
      }
    }

    const isSubmit = isValidate && isValNumDoc && isValidateDate;

    if (isSubmit) {
      (async () => {
        await dispatch(getPublications({
          dateStart,
          dateEnd,
          inn,
          tonality,
          numDocuments
        }));
        await navigate('/search-result');
      })()
    }
  }


  return {
    inn,
    setInn,
    setTonality,
    numDocuments,
    setNumDocuments,
    dateStart,
    setStartDate,
    dateEnd,
    setEndDate,
    innError,
    numDocError,
    dateError,
    inputInnRef,
    inputNumDocRef,
    inputStartDateRef,
    inputEndDateRef,
    onSubmitSearch,
  }

}