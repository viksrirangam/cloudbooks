const loggerMiddleware = store => next => action => {
    console.log(action.type);
    next(action);
}

export default loggerMiddleware;