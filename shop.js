window.onload = init

function init() {
    j_menu()
    cartHoverListener()
}

// 下拉列表
function j_menu() {
    // 获取所有类名为 “nav_item” 的集合
    var nav = document.getElementsByClassName('nav_item');
    // 循环组册鼠标事件
    for (var i = 0; i < nav.length; i++) {
        nav[i].onmouseover = function () {
            var J_menu = document.querySelector('.header_nav_menu');
            J_menu.style.height = '229px';
        }
        nav[i].onmouseleave = function () {
            var J_menu = document.querySelector('.header_nav_menu');
            J_menu.style.height = '0px';
        }
    }
}
function cartHoverListener() {
    let el1 = document.getElementById("J_miniCartBtn")
    let el2 = document.getElementById("J_miniCartMenu")
    el1.addEventListener("mouseover",function() {
        el2.style.height = "100px"
        el1.style.background = "#fff"
    })
    el1.addEventListener("mouseleave",function() {
        el2.style.height = "0px"
        el1.style.background = ""
    })
}
