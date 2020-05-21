/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable func-names */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const uri = 'mongodb://localhost:27017/singleItemPage?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';
mongoose.connect(uri, { useNewUrlParser: true });

const { connection } = mongoose;
connection.on('err', console.error.bind(console, 'connection error:'));
connection.once('open', () => console.log('Database connected...'));

const itemSchema = new Schema({
  itemId: Number,
  altImages: [String],
});

const Item = mongoose.model('Items', itemSchema);

const createItem = (images) => {
  const numDocs = Item.collection.countDocuments({});
  const newItem = new Item({ itemId: numDocs + 1, altImages: images });
  newItem.save();
};

const getItem = (id) => Item.findOne({ itemId: id });

const updateItem = (id, imageIndex, image) => {
  Item.update({ itemId: id }, { [imageIndex]: image });
};

const deleteItem = (id) => Item.remove({ itemId: id });

// const clearTables = () => Item.deleteMany({});

module.exports = {
  Item,
  connection,
  createItem,
  getItem,
  updateItem,
  deleteItem,
};
