function getRandom(userContext, events, done) {
  const itemId = Math.floor(Math.random() * 10000000 + 1);

  userContext.vars.itemId = itemId;

  return done();
}

function postRandom(userContext, events, done) {
  const itemId = Math.floor(Math.random() * 1000000 + 10000001);
  const images = [];
  const start = Math.floor(Math.random() * 20);

  for (let i = 0; i < 5; i += 1) {
    images.push(`'https://sdcimages.s3-us-west-1.amazonaws.com/img${start + i}.jpg'`);
  }

  userContext.vars.itemId = itemId;
  userContext.vars.images = images;
  return done();
}

module.exports = {
  getRandom,
  postRandom,
};
