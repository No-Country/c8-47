const ERROR_HANDLERS = {
  CastError: (res) => res.status(400).json({ message: 'Id inválido' }),

  TokenExpiredError: (res) =>
    res
      .status(401)
      .json({ message: 'Sesión expirada, vuelve a iniciar sesión' }),

  JsonWebTokenError: (res) =>
    res.status(401).json({ message: 'Token inválido' }),

  SyntaxError: (res) => res.status(422).json({ message: 'Error de sintaxis' }),

  TypeError: (res) =>
    res.status(500).json({ message: 'Hubo un error en el servidor' }),

  defaultError: (res) => res.status(500).json({ message: 'Algo anduvo mal' }),
};

const handleErrors = (error, req, res, next) => {
  console.error(error);

  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError;

  handler(res);
};

export { handleErrors };
