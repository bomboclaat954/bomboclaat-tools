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

document.addEventListener("DOMContentLoaded", () => {
    const res = document.getElementById("result");
    const form = document.getElementById("form_check");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const sn = formData.get("sn");
        const check = checkNumber(sn);
        if (check == 0) res.textContent = "Podany numer jest niepoprawny";
        else res.textContent = "Podany numer jest poprawny";
    })
})

