exports.healthcheck = (req, res, next) => {
  console.log('HEADERS: ', req.headers);
  const healthcheck = {
    region: process.env.ZONE || 'region 1',
    uptime: process.uptime(),
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (err) {
    next(err);
  }
};
