const dns = require('dns');

dns.resolve4('www.mum.edu', (err, addresses) => {
  if (err) console.log(err);
  else{
      addresses.forEach(function(ele){
        console.log(ele);
      })
  } 
});