exports.healthcheck = (req, res, next) => {
  const healthcheck = {
    region: 'region 1',
    uptime: process.uptime(),
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (err) {
    next(err);
  }
};
