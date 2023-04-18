window.onload = init

function init() {
    j_menu();
}

// 下拉列表
function j_menu() {
    // 获取所有类名为 “nav_item” 的集合
    var nav = document.getElementsByClassName('nav_item');
    // 循环组册鼠标事件
    for (var i = 0; i < nav.length; i++) {
        nav[i].onmouseover = function () {
            var J_menu = document.querySelector('.J_navMenu');
            J_menu.style.display = 'block';
        }
        nav[i].onmouseout = function () {
            var J_menu = document.querySelector('.J_navMenu');
            J_menu.style.display = 'none';
        }
    }
}
