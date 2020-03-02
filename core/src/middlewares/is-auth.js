import { verify, JsonWebTokenError } from "jsonwebtoken";

export default (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const accessToken = authHeader.split(" ")[1];

  if (!accessToken || accessToken === "") {
    req.isAuth = false;
    return next();
  }

  let decodedToken;
  try {
    decodedToken = verify(accessToken, "secret");
  } catch (error) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.user = { ...decodedToken };
  return next();
};
