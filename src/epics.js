import { combineEpics } from 'redux-observable';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';

const token = process.env.REACT_APP_API_TOKEN;
const endpoint = process.env.REACT_APP_API_ENDPOINT;

const fetchRfcEpic = action$ =>
  action$.ofType('FETCH_RFC')
    .mergeMap(({ payload }) => ajax.getJSON(`${endpoint}${payload}`, { token })
      .map( values => ({ type: 'RFC_SUCCESS', payload: values }))
      .concat(Observable.of({ type: 'BILLING_DATA'}))
      .catch(error => {
        const url = error.request.url.split('/');
        return Observable.of({
          type: 'RFC_FAILED',
          payload: {rfc: url[url.length - 1]}
        })
      })
      .concat(Observable.of({ type: 'BILLING_DATA'}))
    );

const postRfcEpic = action$ =>
  action$.ofType('REPLACE_INTO_BILLING_DATA')
    .mergeMap(({ payload }) => ajax.post(`${endpoint}`, payload, { token, 'Content-Type': 'application/json' })
      .map( values => ({ type: 'RFC_SUCCESS', payload: values.response }))
      .concat(Observable.of({ type: 'SEND_BILLING'}))
      .catch(error => {
        const url = "";
        console.log(error);
        return Observable.of({
          type: 'RFC_FAILED',
          payload: {id: url} ///TODO: FIX THIS WITH A REAL RESPONSE!!!
        })
      })
    );

const previewOrResendEpic = action$ =>
  action$.ofType('FETCH_ORDER_ITEMS')
    .mergeMap(({ payload }) => {
      const { emit, busline, ticket_number, email } = payload;
      return ajax.getJSON(`${endpoint}${emit}/${busline}/${ticket_number}/${email}/`,
        { token })
        .map( values => ({ type: 'FETCH_ORDER_ITEMS_SUCCESS', payload: values }))
        .concat(Observable.of({ type: 'PREVIEW_ORDER'}))
        .catch(error => {
          const url = "";
          console.log(error);
          return Observable.of({
            type: 'FETCH_ORDER_ITEMS_FAILURE',
            payload: {id: url} ///TODO: FIX THIS WITH A REAL RESPONSE!!!
          })
        })
      }
    );



export const rootEpic = combineEpics(
  fetchRfcEpic,
  postRfcEpic,
  previewOrResendEpic
);