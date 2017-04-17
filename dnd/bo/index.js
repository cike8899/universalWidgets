!function () {
    // var btn = document.querySelector(".control");
    var pane = document.querySelector(".pane");

    // var moveW = 0;

    // btn.addEventListener("click", function (e) {
    //     moveW += 10;
    //     pane.style.transform = `translateX(${moveW}px)`;
    // });

    // 使用：声明2个拖拽实例
    new Drag('target');
    new Drag('target2');
}()