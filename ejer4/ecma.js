let vec = new Map([
    [1, 0],
    [5, 0],
    [10, 0],
    [25, 0],
    [50, 0],
    [100, 0],
    [200, 0],
    [500, 0],
    [1000, 0],
    [2000, 0],
    [5000, 0]
]);


camb = prompt("Cantidad para desglose")

canti = camb;
do {

    if (camb >= 5000) {
        vec.set(5000, vec.get(5000) + 1);
        camb = camb - 5000;
    }

    if (camb >= 2000) {
        vec.set(2000, vec.get(2000) + 1);
        camb = camb - 2000;
    }

    if (camb >= 1000) {
        vec.set(1000, vec.get(1000) + 1);
        camb = camb - 1000;
    }

    if (camb >= 500) {
        vec.set(500, vec.get(500) + 1);
        camb = camb - 500;
    }

    if (camb >= 200) {
        vec.set(200, vec.get(200) + 1);
        camb = camb - 200;
    }

    if (camb >= 100) {
        vec.set(100, vec.get(100) + 1);
        camb = camb - 100;
    }

    if (camb >= 50) {
        vec.set(50, vec.get(50) + 1);
        camb = camb - 50;
    }

    if (camb >= 25) {
        vec.set(25, vec.get(25) + 1);
        camb = camb - 25
    }

    if (camb >= 10) {
        vec.set(10, vec.get(10) + 1);
        camb = camb - 10
    }

    if (camb >= 5) {
        vec.set(5, vec.get(5) + 1);
        camb = camb - 50
    }

    if (camb >= 1) {
        vec.set(1, vec.get(1) + 1);
        camb = camb - 1
    }

} while (camb >= 1);

document.write('<table border="1"><tr><td>Desglose de la cantidad: ' + canti + '</td></tr>')

for (iterator of vec) {

    if (iterator[1] != 0) {
        document.write("<tr><td><b>Unidades de" + iterator[0] + ": " + iterator[1] + "</b></td></tr>");
    } else {
        document.write("<tr><td>Unidades de" + iterator[0] + ": " + iterator[1] + "</td></tr>");
    }

}
console.table(vec);