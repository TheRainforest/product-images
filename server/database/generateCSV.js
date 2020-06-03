const fs = require('fs');

console.time('Time to generate data');
const createItems = fs.createWriteStream('server/database/images.csv');
createItems.write('itemId|images\n', 'utf8');

function generateData(writer, encoding, callback) {
  let index = 10000000;
  let itemId = 0;
  function write() {
    let ok = true;
    do {
      index -= 1;
      itemId += 1;
      const images = [];
      let imageStartNum = itemId - 1;
      while (imageStartNum >= 20) {
        imageStartNum -= 20;
      }
      imageStartNum *= 5;
      for (let i = 1; i <= 5; i += 1) {
        images.push(`https://rainforest-product-images.s3.us-east-2.amazonaws.com/img${imageStartNum + i}.jpg`);
      }
      const data = `${itemId}|{${images}}\n`;

      if (index === 0) {
        console.timeEnd('Time to generate data');
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (index > 0 && ok);
    if (index > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

generateData(createItems, 'utf-8', () => createItems.end());
