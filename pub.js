// MQTT Publisher

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.hivemq.com') // broker runs on a cloud
const readline = require('readline');
var topic = 'TEST123'
var count = 0;

client.on('connect', () => {
  count = count + 1
  const randomNumber = Math.random()
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What is the name of the sensor city? ', (city) => {
    const data = `{"city": "${city}", "currentTemperature": "${randomNumber}"}`
      
    setInterval(() => {
      client.publish(topic, data)
      console.log('Message sent!', data)
      client.end()
    }, 3000)
  });
})


