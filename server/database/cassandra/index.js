require('dotenv').config();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  localDataCenter: process.env.CS_LDC,
  contactPoints: [`localhost:${process.env.CS_PORT}`],
});

client.connect()
  .then(() => {
    client.execute(`
      CREATE KEYSPACE IF NOT EXISTS productimages WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1}`)
      .then(() => console.log('Keyspace created'));
  })
  .then(() => {
    client.execute(`
    DROP TABLE IF EXISTS productimages.items`)
      .then(() => console.log('Table dropped'));
  })
  .then(() => {
    client.execute(`
      CREATE TABLE IF NOT EXISTS productimages.items (
        id INT,
        images list<text>,
        PRIMARY KEY (id)
      )
    `)
      .then(() => console.log('Table created'));
  })
  .catch((err) => console.error(err));
