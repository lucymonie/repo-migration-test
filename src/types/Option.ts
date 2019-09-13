// ----- Imports ----- //

import { Monad } from './Monad';


// ----- Classes ----- //

interface OptionInterface<A> extends Monad<A> {
    withDefault(a: A): A;
}

class Some<A> implements OptionInterface<A> {

    value: A;

    withDefault(a: A) {
        return this.value;
    }

    map<B>(f: (a: A) => B): Option<B> {
        return new Some(f(this.value));
    }

    andThen<B>(f: (a: A) => Option<B>): Option<B> {
        return f(this.value);
    }

    constructor(value: A) {
        this.value = value;
    }

}

class None<A> implements OptionInterface<A> {

    withDefault(a: A) {
        return a;
    }

    map<B>(f: (a: A) => B): Option<B> {
        return new None();
    }

    andThen<B>(f: (a: A) => Option<B>): Option<B> {
        return new None();
    }

}

type Option<A> = Some<A> | None<A>;


// ----- Exports ----- //

export {
    Option,
    Some,
    None,
};
