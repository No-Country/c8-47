const testController = async (req, res, next) => {
  return res.send("Now you are on /test");
};

const authenticationRequired = async (req, res, next) => {
  res.send("you are authenticated /test/authentication");
};

const adminRequired = async (req, res, next) => {
  res.send("welcome admin /test/admin");
};

export { testController, authenticationRequired, adminRequired };
