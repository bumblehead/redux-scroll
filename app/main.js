// Filename: main.js  
// Timestamp: 2016.03.09-23:12:52 (last modified)
// Author(s):


import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reduxscr from './reduxscr';
import rdu_reduxscr from './reduxscr_rdu';

import rx from 'rxjs/Rx.DOM';
import superagent from 'superagent';
import superagentpromise from 'superagent-promise';

const store = createStore(rdu_reduxscr);


ReactDOM.render(
  <Provider store={store}>
    <Reduxscr />
  </Provider>,
  document.getElementById('root')
);


const USERS_SERVICE = '/users';
const superagentp = superagentpromise(superagent, Promise);
const refreshClickStream = rx.Observable.fromEvent(document.body, 'click');
const requestOnRefreshStream = refreshClickStream.map(() => {
  const randomOffset = Math.floor(Math.random()*500);
  
  return USERS_SERVICE + '?since=' + randomOffset;
});

const responseStream = requestOnRefreshStream
      .startWith(USERS_SERVICE + '?first')
        .flatMap(requestUrl => (
          rx.Observable.fromPromise(superagentp.get(requestUrl).type('json'))
        )).map(xhr => JSON.parse(xhr.text));

responseStream.subscribe(userlist => {
  userlist.map(user => {
    store.dispatch({
      type : 'ADD_USER',
      user
    });
  });
});  


window.rx = rx;

rx.Observable
  .fromEvent(window, 'scroll')
  .debounceTime(300)
  .subscribe(e => {
    rx.Observable
      .from(USERS_SERVICE + '?first')
      .map(requestUrl => {
        console.log('req url ', requestUrl);
        requestUrl = USERS_SERVICE + '?first';
        
        return rx.Observable.fromPromise(superagentp.get(requestUrl).type('json'));
      }).map(xhr => JSON.parse(xhr.text)).subscribe(userlist => {
        userlist.map(user => {
          store.dispatch({
            type : 'ADD_USER',
            user
          });
        });
      });
  });

