!function () {
    var btn = document.querySelector(".control");
    var pane = document.querySelector(".pane");

    var moveW = 0;

    btn.addEventListener("click", function (e) {
        moveW += 10;
        pane.style.transform = `translateX(${moveW}px)`;
    });
}()