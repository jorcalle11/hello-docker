'use strict';

const express = require('express');
const redis = require('redis');
const os = require('os');

const app = express();
const redisClient = redis.createClient({
  // Pass the name of the service that you defined on the docker-compose.yml file
  host: 'redis-server'
});
const port = process.env.PORT || 3000;
const REDIS_KEY = 'visits';

app.use('/', (req, res) => {
  const hostname = os.hostname();
  const homedir = os.homedir();

  redisClient.get(REDIS_KEY, (err, visits) => {
    const numberOfVisits = visits ? +visits : 0;
    redisClient.set(REDIS_KEY, numberOfVisits + 1);

    res.send({ hostname, homedir, visits: numberOfVisits });
  });
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
