function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    let namedFunction = () => console.log('something');
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('hello there!');
    }
}