const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyCoG9jwDn73Euk1vICRzSlfe6K_E__xRTc",
  authDomain: "trabalho5-sensor.firebaseapp.com",
  databaseURL: "https://trabalho5-sensor-default-rtdb.firebaseio.com",
  projectId: "trabalho5-sensor",
  storageBucket: "trabalho5-sensor.appspot.com",
  messagingSenderId: "676724429434",
  appId: "1:676724429434:web:244944937da453fc9aa1c3"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

module.exports = database