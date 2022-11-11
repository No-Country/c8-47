const testController = async (req, res, next) => {
  return res.send("Now you are on /test");
};

export { testController };
