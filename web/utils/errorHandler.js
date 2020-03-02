const coreApiErrorHandler = error => {
  console.log(error);
  throw error;
};

export { coreApiErrorHandler };
