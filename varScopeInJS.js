// prints 6 as if statement is never executed
var a = 6;
function test () {
    a = 10;
    if (false) {
        var a = 20;
    }
}
test();
console.log(a);
