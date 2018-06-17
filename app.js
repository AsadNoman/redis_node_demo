var redis = require('redis');
var client  = redis.createClient();

//set function
client.set('boo', 'i wanted to type something', redis.print);

//get function
client.get('boo', function(error, result){
    console.log('\"' + result +  '\"');
}); 
