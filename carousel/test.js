!function () {
    var people = {};
    function show() {
        console.info("dddd", people);
    }
    show();
}()

function callme() {
    var name = {};
    function speak() {
        console.info(name);
    }
    speak();
}

callme();