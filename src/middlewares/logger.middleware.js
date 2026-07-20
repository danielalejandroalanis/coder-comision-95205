export function logger(req, res, next) {
  console.info(`Method Type: ${req.method} URL: ${req.url}`);
  next();
}
