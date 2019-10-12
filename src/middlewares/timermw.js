const timerMiddleware = store => next => action => {
    if (action.type === 'START_TIMER') {
      action.interval = setInterval(() => store.dispatch({ type: 'TICK', currentTime: Date.now() }), 1000);
    } else if (action.type === 'STOP_TIMER') {
      clearInterval(action.interval);
    }
    // next() passes an action to the next middleware, or to the reducer if
    // there's no next middleware
    next(action);
  };

  export default timerMiddleware;