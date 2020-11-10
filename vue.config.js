module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? `/taiwan-air-indicators-dashboard/`
      : "/"
};
