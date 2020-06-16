
export default store => next => action => {
    console.group(action.type);

    console.log(action);
    console.log("Current State");
    console.log(store.getState());
    console.groupEnd();
    return next(action);
}