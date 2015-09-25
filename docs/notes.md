Course notes
============

Function **declarations** (as opposed to function *expressions*) always hoisted.

* so can be declared at the **bottom** of the scope in which they're used, for neatness (eg, even after return).

`function cb(error, data) {}`

* error should be an object (to maintain stack info), eg `cb(new Error('The thing went wrong'));`
* Every branch must terminate by calling cb, either with data or error (rarely (and dependant on context), both)

Async = no exceptions!

Prefer promises for apps, callbacks for servers??

lodash instead of for loops?

require.main to see if module is running 'standalone': http://heyrod.com/snippet/s/nodejs-require-main.html