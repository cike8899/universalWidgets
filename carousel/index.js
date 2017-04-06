!function () {
    var icons = document.querySelectorAll(".font-container");
    var current = 0;
    var container;
    var i = 0;
    var length = icons.length;
    var items = getAllItems();
    for (; i < length; i++) {
        !function (j) {
            icons[i].addEventListener("click", function (e) {
                console.info(j);
                if (j == 0) {//左
                    if (current != 0) {
                        current--;
                        items[current].setAttribute("transform", "");
                    }
                } else {

                }
            })
        }(i)
    }
    function getAllItems() {
        if (!container) {
            container = document.querySelector(".carousel-container");
        }
        var i, len;
        var items = container.childNodes;
        for (i = 0, len = items.length; i < len; i++) {
            items.identity = i;
        }
        return items;
    }
}()