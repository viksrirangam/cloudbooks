const promiseMiddleware = store => next => action => {
    // check if the `payload` property is a promise, and, if so, wait for it to resolve
    debugger;
    if (action.payload && typeof action.payload.then === 'function') {
      action.payload.then(
        res => { action.payload = res; action.completed = true; next(action); },
        err => { action.error = err; action.completed = false; next(action); });
    } else {
      // no-op if the `payload` property is not a promise
      next(action);
    }
  };

  export default promiseMiddleware;