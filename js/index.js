function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

document.addEventListener("DOMContentLoaded", () => {
    const understood_btn = document.getElementById("understood");
    const warning_box = document.getElementById("warning");
    if (document.cookie.includes("yes") == true) {
        warning_box.className = "hidden";
    }
    understood_btn.addEventListener("click", () => {
        warning_box.className = "hidden";
        setCookie("x", "yes", 7);
    });
});
