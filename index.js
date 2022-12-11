const width = document.getElementById('module').clientWidth;
const height = document.getElementById('module').clientHeight;
var preBottleRight = parseFloat(getComputedStyle(document.getElementsByClassName('bottle')[0]).right);
var preRockRight = parseFloat(getComputedStyle(document.getElementsByClassName('rock')[0]).right);
document.addEventListener("mousemove", (e) => {
    var x = e.pageX - width / 2;
    document.getElementById('module').style.backgroundPositionX = -x / 45 + "px";
    var bottle = document.getElementsByClassName('bottle')[0];
    bottle.style.right = preBottleRight + x / 45 + "px";
    var rock = document.getElementsByClassName('rock')[0];
    rock.style.right = preRockRight + x / 30 + "px";

    // el.style.backgroundPositionY = -e.offsetY / 40 + "px";
});

window.addEventListener('scroll', function () {
    var style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {width: 8px;}`;
    setTimeout(() => {
        style.innerHTML = ``;
    }, 500);
    document.head.appendChild(style);
    var scale = 1 + window.pageYOffset / height / 8;
    document.getElementsByClassName("bottle")[0].style.transform = "scale(" + scale + "," + scale + ")";
    document.getElementsByClassName("rock")[0].style.transform = "scale(" + scale + "," + scale + ")";
    document.getElementById("module").style.transform = "scale(" + (scale + 0.07) + "," + (scale + 0.07) + ")";
    document.getElementsByClassName("brand-first-container")[0].style.opacity = 1 - window.pageYOffset / height * 1.6;
    document.getElementsByClassName("idLlUT")[0].style.opacity = 1.7 - window.pageYOffset / height;
});