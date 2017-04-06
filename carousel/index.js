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
                        for (var k = 0; k < items.length; k++) {
                            if (k == current) {
                                items[k].style.display = "block";
                            } else {
                                items[k].style.display = "none";
                            }
                        }
                    }
                } else {
                    if (current != 3) {
                        current++;
                        for (var m = 0; m < items.length; m++) {
                            if (m == current) {
                                items[m].style.display = "block";
                            } else {
                                items[m].style.display = "none";
                            }
                        }
                    }
                }
            })
        }(i)
    }
    function getAllItems() {
        if (!container) {
            container = document.querySelector(".carousel-container");
        }
        var i, len;
        var items = container.children;
        for (i = 0, len = items.length; i < len; i++) {
            items.identity = i;
        }
        return items;
    }
}()