
// MQTT Subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.hivemq.com') // broker runs on a cloud
var topic = 'TEST123'
var database = require('./firebase')
var { set, ref} = require('firebase/database') 

const sentToFirebase = (topic, data) => {
  set(ref(database, 'cities/' + data.city), {
    temperature: data.currentTemperature,
  });
}

client.on('message', (topic, data) => {
  var dataJSON = JSON.parse(data);
  sentToFirebase(topic, dataJSON)
  console.log(dataJSON.currentTemperature)
  client.end()
})

client.on('connect', () => {
  client.subscribe(topic)
})


