const promiseMiddleware = store => next => action => {
    // check if the `payload` property is a promise, and, if so, wait for it to resolve
    if (action.payload && typeof action.payload.then === 'function') {
      action.payload.then(
        res => { action.payload = res; next(action); },
        err => { action.error = err; next(action); });
    } else {
      // no-op if the `payload` property is not a promise
      next(action);
    }
  };

  export default promiseMiddleware;