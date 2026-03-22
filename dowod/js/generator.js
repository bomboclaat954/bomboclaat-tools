function checkNumber(number) {
    if (number.length != 9) return 0;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let n = [];
    for (let i = 3; i < 9; i++) {
        n.push(number.slice(i, i + 1));
    }
    let ls = [number.slice(0, 1), number.slice(1, 2), number.slice(2, 3)];
    let lval = [];
    let checksum = 0;
    const w = [7, 3, 1, 9, 7, 3, 1, 7, 3];

    for (let i = 0; i < 3; i++) {
        let a_pos = alphabet.indexOf(ls[i]);
        lval.push(a_pos + 10);
    }

    for (let i = 0; i < 9; i++) {
        if (i < 3) checksum += lval[i] * w[i];
        else {
            checksum += Number(n[i - 3]) * w[i];
        }
    }

    if (checksum % 10 == 0) return 1;
    else return 0;
}

function generateNumber() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    while (true) {
        let sn = "";

        for (let i = 0; i < 3; i++) {
            sn += alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        for (let i = 0; i < 6; i++) {
            sn += Math.floor(Math.random() * 10);
        }

        if (checkNumber(sn) === 1) {
            return sn;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const res = document.getElementById("result");
    res.textContent = generateNumber();
})
