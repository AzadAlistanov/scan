import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { IInitialState, TPublications } from '../types';
import { fetchAuth, getPublications, fetchUserInfo, getDocuments } from './extraReducers';



const initialState: IInitialState = {
  token: {
    headers: {
      Authorization: null,
    }
  },
  'auth-status': null,
  info: {
    eventFiltersInfo: {
      companyLimit: null,
      usedCompanyCount: null
    }
  },
  publications: null,
  'id-documents': null,
  documents: null

}

export const scanSlice = createSlice({
  name: "scan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state['auth-status'] = 'loading';
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.token.headers.Authorization = action.payload;
        state['auth-status'] = 'loaded';
      })
      .addCase(fetchAuth.rejected, (state) => {
        state['auth-status'] = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(PURGE, () => {
        return initialState
      })
      .addCase(getPublications.fulfilled, (state, action) => {
        type TId = {
          encodedId: string,
          influence: number
          similarCount: number
        }
        let arrId = action.payload.arrIdPublications.items.map((id: TId) => id.encodedId)
        state['id-documents'] = [...arrId];


        let publications: TPublications[] = [];

        if (action.payload.publications.data[0].data.length) {

          for (let i = 0; i < action.payload.publications.data[0].data.length; i++) {
            let publication = {
              'risk-factors': null,
              'total-documents': null,
              date: null
            }
            publication['risk-factors'] = action.payload.publications.data[1].data[i].value;
            publication['total-documents'] = action.payload.publications.data[0].data[i].value;
            publication['date'] = action.payload.publications.data[1].data[i].date;
            publications.push(publication);
          }
        }
        state.publications = [...publications];
      })
      .addCase(getDocuments.fulfilled, (state, action) => {
        state.documents = action.payload
      })
  }
});
