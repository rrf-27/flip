function everything() {
    function menuBtnClicking(id1, id2, id3, btnId, menuId) {
        var buton = document.getElementById(btnId);
        var firstLine = document.getElementById(id1);
        var secondLine = document.getElementById(id2);
        var thirdLine = document.getElementById(id3);
        var menu = document.getElementById(menuId);
        buton.onclick = function() {
            if(menu.style.display == "block") {
                menu.style.display = "none";
                secondLine.style.transform = "none";
                secondLine.style.opacity = "100%";
                firstLine.style.transform = "none";
                thirdLine.style.transform = "none";
            } else {
                menu.style.display = "block";
                secondLine.style.transform = "translateX(100%)";
                secondLine.style.opacity = "0%";
                firstLine.style.transform = "translateY(11px)";
                thirdLine.style.transform = "translateY(-9px)";
                setTimeout(function() {
                    firstLine.style.transform = "translateY(11px) rotate(90deg)";
                    thirdLine.style.transform = "translateY(-9px) rotate(-90deg)";
                }, 250);
                setTimeout(function() {
                    firstLine.style.transform = "translateY(11px) rotate(45deg)";
                    thirdLine.style.transform = "translateY(-9px) rotate(-45deg)";
                }, 500);
            }
        }
    }
    menuBtnClicking( "menu-two", "menu-one", "menu-three", "menu-btn", "menu");
}