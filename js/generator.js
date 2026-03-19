function generatePESEL(y, m, d, g) {
    let PESEL = "";
    let checksum = 0;
    let k;
    let rn = new Array(4);

    if (y >= 2000) {
        m += 20;
    }

    let _y = String(y).padStart(4, "0").slice(2, 4);

    let _m = m < 10 ? "0" + m : String(m);
    let _d = d < 10 ? "0" + d : String(d);

    PESEL += _y + _m + _d;

    rn[0] = Math.floor(Math.random() * 10);
    rn[1] = Math.floor(Math.random() * 10);
    rn[2] = Math.floor(Math.random() * 10);

    const even = [0, 2, 4, 6, 8];
    const odd = [1, 3, 5, 7, 9];

    if (g === 1) {
        rn[3] = odd[Math.floor(Math.random() * 5)];
    } else {
        rn[3] = even[Math.floor(Math.random() * 5)];
    }

    PESEL += String(rn[0]) + String(rn[1]) + String(rn[2]) + String(rn[3]);

    const w = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    for (let i = 0; i < 10; i++) {
        checksum += Number(PESEL[i]) * w[i];
    }

    k = checksum % 10;
    if (k !== 0) k = 10 - k;

    PESEL += String(k);
    return PESEL;
}

document.addEventListener("DOMContentLoaded", () => {
    const res = document.getElementById("result");
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const birthdate = formData.get("birthdate");
        const g = Number(formData.get("gender"));
        const y = Number(birthdate.slice(0, 4));
        const m = Number(birthdate.slice(5, 7));
        const d = Number(birthdate.slice(8, 10));
        res.textContent = generatePESEL(y, m, d, g);
    })
})

