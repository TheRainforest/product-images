/* eslint-disable linebreak-style */
const data = [];
let arr = [];

const run = function run() {
  for (let i = 1; i <= 101; i += 1) {
    if (arr.length !== 5) {
      arr.push(`https://single-page-items.s3.us-east-2.amazonaws.com/img${i}.jpg`);
    } else {
      const obj = {
        altImages: arr,
      };
      data.push(obj);
      arr = [];
      arr.push(`https://single-page-items.s3.us-east-2.amazonaws.com/img${i}.jpg`);
    }
  }
  arr = [];
};

run();
run();
run();
run();
run();

module.exports = data;
