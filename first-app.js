var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user;
user = 34213;
console.log(user);
user = 'Mayank Choudhary';
console.log(user);
var user1 = {
    name: 'Mayank',
    age: 34,
    isAdmin: true,
    id: 'abc',
};
var hobbies = [
    'mayank',
    'Tushar',
    'Krati',
    'mayur',
];
console.log(hobbies);
hobbies = [1, 2, 4];
console.log(hobbies);
var jg1ns = 'Mayank';
function add(a, b) {
    return a + b;
}
function fun(a, b, calcFuntion) {
    return calcFuntion(a, b);
}
console.log(fun(10, 20, add));
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function loginCredentials(credentials) { }
var appUser;
appUser = {
    permissions: ['role'],
    userName: 'Mayank',
};
var role;
role = 'user';
console.log(role);
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        console.log('Hi there.');
    }
}
var textStorage = {
    var1: 'A',
    var2: 30,
    var3: true,
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
console.log(merge({ age: 'Mayank' }, { name: 'Mayank' }));
