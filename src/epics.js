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

const fetchRfcEpic = action$ =>
  action$.ofType('FETCH_RFC')
    //.do( values => console.log('Action Values: ',values))
    .mergeMap(({ payload }) => ajax.getJSON(`http://localhost:3001/rfc/${payload}`) //TODO: CAMBIAR RUTA DEPENDIENDO AMBIENTE
      .map( values => ({ type: 'RFC_SUCCESS', payload: values }))
      .concat(Observable.of({ type: 'BILLING_DATA'}))
      .catch(error => {
        const url = error.request.url.split('/');
        return Observable.of({
          type: 'RFC_FAILED',
          payload: {id: url[url.length - 1]} ///TODO: FIX THIS WITH A REAL RESPONSE!!!
        })
      })
      .concat(Observable.of({ type: 'BILLING_DATA'}))
    );

export const rootEpic = combineEpics(
  fetchRfcEpic
);