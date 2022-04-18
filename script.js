var j = document.getElementById('sqr2');
j.addEventListener("mouseout", func);


var x = 0;
var y = 0;
function func() {

    const id = setInterval(frame, 50);


    function frame() {


        if (x == 100) {
            if (y == 55) {
                clearInterval(id);
            }
            else {y += 5
            j.style.marginLeft = y + "px";}
        }

        else {
            x += 5
            j.style.marginTop = x + "px";

        }
    }


}


