console.log('Script started');

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

console.log('DNS servers set to:', dns.getServers());

dns.resolveSrv('_mongodb._tcp.zerodhaclonecluster.nr6my6n.mongodb.net', (err, addresses) => {
  console.log('Callback fired');
  if (err) {
    console.error('DNS SRV lookup failed:', err);
  } else {
    console.log('DNS SRV lookup succeeded:', addresses);
  }
});

console.log('Script reached end (sync part)');