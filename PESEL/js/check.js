function checkPESEL(PESEL) {
    if (PESEL.length != 11) return 0;
    const k = PESEL.slice(10, 11);
    let checksum = 0;
    const w = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    for (let i = 0; i < 10; i++) {
        checksum += Number(PESEL[i]) * w[i];
    }

    let _k = checksum % 10;
    if (_k !== 0) _k = 10 - _k;
    if (_k == k) {
        let y = PESEL.slice(0, 2);
        let m = PESEL.slice(2, 4);
        let d = PESEL.slice(4, 6);
        if (m > 20) {
            m -= 20;
            if (m < 30) m = "0" + String(m);
            if (String(y) === "00") y = "2000";
            else y = "20" + y;
        } else {
            y = "19" + y;
        }
        if (d < 10) {
            d = d.slice(1, 2);
        }
        let g = PESEL.slice(9, 10);
        if (g % 2 == 0) g = "k";
        else g = "m";
        return JSON.stringify({ y: y, m: m, d: d, g: g });
    }
    else return 0;
}

document.addEventListener("DOMContentLoaded", () => {
    const res = document.getElementById("result");
    const form = document.getElementById("form_check");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const PESEL = formData.get("pesel");
        const check = JSON.parse(checkPESEL(PESEL));
        if (check == 0) res.textContent = "Podany numer jest niepoprawny";
        else {
            const y = check.y;
            const m = check.m;
            const d = check.d;
            const g = check.g == "m" ? "mężczyzna" : "kobieta"
            res.innerHTML = `Podany numer jest poprawny <br> Data urodzenia: ${d}.${m}.${y} <br> Płeć: ${g}`
        }
    })
})
