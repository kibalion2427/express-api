exports.search = (req, res, next) => {
  console.log('HEADERS: ', req.headers);
  const payload = {
    region: process.env.ZONE || 'region 1',
    controller: '/search',
    apiVersion: 'v1',
  };
  try {
    res.send(payload);
  } catch (err) {
    next(err);
  }
};
