// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyC7cepGyz2PXHpJDfsVNnuMAtXCS7U8A0s",
    authDomain: "medlinkdemo.firebaseapp.com",
    projectId: "medlinkdemo",
    storageBucket: "medlinkdemo.appspot.com",
    messagingSenderId: "1050994847313",
    appId: "1:1050994847313:web:41aff9816790ad0d2c9270",
    measurementId: "G-WFPVM5SD6X"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BIDJt_dqiJq6m0TkURXxIdgzy0Hf5Bjzs56HEgXA4xdgOtOzC2I6JxJSqvpICTBY2yaTQ6i9b077ztSzN0f1j9o` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

  
