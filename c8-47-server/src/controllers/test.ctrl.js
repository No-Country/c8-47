const testController = async (req, res, next) => {
  return res.send("Now you are on /test");
};

const authenticationRequired = async (req, res, next) => {
  res.send("you are authenticated");
};

const adminRequired = async (req, res, next) => {
  res.send("welcome admin");
};

export { testController, authenticationRequired, adminRequired };
