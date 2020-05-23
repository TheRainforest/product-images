const db = require('./index');
const data = require('./dummyData');

// const clearTables = async function clearTables() {
//   await db.clearTables();
// };

// clearTables();

const documents = [];

for (let i = 0; i < 100; i += 1) {
  documents.push({ itemId: i + 1, altImages: data[i].altImages });
}

db.Item.collection.insertMany(documents, (err) => {
  if (err) {
    console.log(`Error while seeding the database: ${err}`);
    db.connection.close();
  } else {
    console.log('DB successfully seeded and now closing...');
    db.connection.close();
  }
});
