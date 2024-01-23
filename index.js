function receivesAFunction(potato) {
    potato()
}

function returnsANamedFunction() {
    return function namedFunction() {
    }
}

function  returnsAnAnonymousFunction() {
    return () => {
    };
}
returnsANamedFunction()
