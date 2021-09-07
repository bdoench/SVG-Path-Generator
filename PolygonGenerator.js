function generatePoly() {

    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }

    var dots = [],
        result = [],
        n = document.getElementById("n").value,
        m = document.getElementById("m").value,
        sector = ((360 / n) * Math.PI) / 180,
        offset = 0,
        dotIndex;


    for (var i = 0; i < (Math.PI * 2); i += sector) {
        var dot = new Vector(200 * Math.cos(i), 200 * Math.sin(i));
        dots.push(dot);
    }

    if (m == 1) {

        for (var j = 0; j < dots.length; j++) {

            result.push("L" + Math.round(dots[j].x));
            result.push(Math.round(dots[j].y));
            
        }
    } else {

        for (var k = 0; k < dots.length; k++) {

            dotIndex = ((k + k * (m - 1)) % n);

            if (dotIndex == 0 && result.length > 1) {

                offset++;
                result.push("Z" + "M" + Math.round(dots[dotIndex + offset].x));
                result.push(Math.round(dots[dotIndex + offset].y));
            
            }

            result.push("L" + Math.round(dots[dotIndex + offset].x));
            result.push(Math.round(dots[dotIndex + offset].y));
            
        }
    }

    var x = "M200,0," + result.toString() + ",Z";
    document.getElementById("path").setAttribute("d", x);
    console.log(x);

}
