window.onload = function () {
    let btn = document.querySelector(".button--pink");
    let cnt = 0;
    let valuePink = document.querySelector(".value--pink")

    btn.onclick = function () {
        cnt++;
        valuePink.innerHTML = cnt
    };
};
