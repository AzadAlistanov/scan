import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import { IState, THistogram, TSignIn } from "../types";

export const fetchAuth = createAsyncThunk(
  "scan/fetchAuth",
  async (user: TSignIn, { rejectWithValue }) => {
    try {
      let token = await axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', user)
        .then((token) => `Bearer ${token.data.accessToken}`)
      return token

    } catch (error) {
      alert('Неверные данные')
      return rejectWithValue(error)
    }
  }
);

export const fetchUserInfo = createAsyncThunk(
  "scan/fetchUserInfo",
  async (_, { getState }) => {
    let state = await getState() as IState;
    let token = await state.scan.token;

    let info = await axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', token as AxiosRequestConfig)
      .then((info) => info.data)
      .catch((error) => console.log(error));

    return info;
  }
);


export const getPublications = createAsyncThunk(
  "scan/getPublications",
  async ({ dateStart, dateEnd, inn, tonality, numDocuments }: THistogram, { getState }) => {

    let state = await getState() as IState;
    let token = await state.scan.token;

    let obj = {
      "issueDateInterval": {
        "startDate": new Date(dateStart).toISOString(),
        "endDate": new Date(dateEnd).toISOString()
      },
      "searchContext": {
        "targetSearchEntitiesContext": {
          "targetSearchEntities": [
            {
              "type": "company",
              "sparkId": null,
              "entityId": null,
              "inn": Number(inn),
              "maxFullness": true,
              "inBusinessNews": null
            }
          ],
          "onlyMainRole": true,
          "tonality": tonality,
          "onlyWithRiskFactors": false,
          "riskFactors": {
            "and": [],
            "or": [],
            "not": []
          },
          "themes": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "themesFilter": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "searchArea": {
        "includedSources": [],
        "excludedSources": [],
        "includedSourceGroups": [],
        "excludedSourceGroups": []
      },
      "attributeFilters": {
        "excludeTechNews": true,
        "excludeAnnouncements": true,
        "excludeDigests": true
      },
      "similarMode": "duplicates",
      "limit": Number(numDocuments),
      "sortType": "sourceInfluence",
      "sortDirectionType": "desc",
      "intervalType": "month",
      "histogramTypes": [
        "totalDocuments",
        "riskFactors"
      ]
    }

    let publications = await axios
      .post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms',
        obj,
        token)
      .then((res) => res.data)
      .catch((error) => console.log(error))

    let arrIdPublications = await axios
      .post('https://gateway.scan-interfax.ru/api/v1/objectsearch',
        obj,
        token)
      .then((res) => res.data)
      .catch((error) => console.log(error))

    return { publications, arrIdPublications };

  }
);


export const getDocuments = createAsyncThunk(
  "scan/getDocuments",
  async (ids: string[], { getState }) => {
    let state = await getState() as IState;
    let token = await state.scan.token;

    let documents = await axios
      .post('https://gateway.scan-interfax.ru/api/v1/documents',
        { ids },
        token)
      .then((res) => res.data)
      .catch((error) => console.log(error))

    return documents;
  }
)