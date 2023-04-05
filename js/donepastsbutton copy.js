disabled = 0;
function disableAutomatic() {
    disabled = 1;
}

c = 0;
timeoutChangeButtonTransition();

setInterval(function abc() {timeoutChangeButtonTransition()}, 10000);
function timeoutChangeButtonTransition() {
    if (disabled = 1) {
        console.log(disabled);
        return;
    } else {
    if (c < 3) {
        c += 1;
        console.log(c);
    } else {
        c = 1;
        console.log(c);
    }
    changeButtonTransition(c);   
}
}


function changeButtonTransition(y) {
    ChangeV(y);
    z = "dps"+y.toString();
    if (y = 1) {
        d = 3;
    } else {
        d -= 1;
    }
    
    o = "";
    switch(z) {
        case("dps1"):
        o = "dps3";
        break;
        case("dps2"):
        o = "dps1";
        break;
        case("dps3"):
        o = "dps2";
        break;
    }
    /*
    cssClassAdd(z, "dpjs1");
    cssClassAdd(o, "dpjs2");
    cssClassRemove(z, "dpjs2");
    cssClassRemove(o, "dpjs1");
    */
    cssTransition(o, "0s linear");
    cssTransition(z, "10s linear");
    cssBackground(z, "left");
    cssBackground(o, "right center");
    /*
    cssBackgroundColor(o, "#ffe8c5");
    cssBackgroundExact(z, "linear-gradient(to right, #ffae36 50%, #ffe8c5 50%) left;");
    cssColor("dpst", "#FFF")*/
    console.log(y)
}

function cssTransition(i, o) {
    document.getElementById(i.toString()).style.transition = o.toString();
}

function cssClassAdd(i, o) {
    document.getElementById(i.toString()).classList.add(o.toString());
}

function cssBackgroundExact(i, o) {
    document.getElementById(i.toString()).style.background = o.toString();
}

function cssClassRemove(i, o) {
    document.getElementById(i.toString()).classList.remove(o.toString());
}

function cssBackground(i, o) {
    document.getElementById(i.toString()).style.backgroundPosition = o.toString();
}

function cssColor(i, o) {
    document.getElementById(i.toString()).style.color = o.toString();
}

function cssBackgroundColor(i, o) {
    document.getElementById(i.toString()).style.background = o.toString();
}

/*
const timeoutChangeButtonTransition(a) = setTimeout(changeButtonTransition(a), 5000);
for (let i = 1; i < 4; i++) {
    console.log(i);
    timeoutchangeButtonTransition(i), 5000);
} */