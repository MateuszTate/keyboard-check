const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", (event) => {
    const keyName = event.key.toUpperCase();
    keys.forEach((key) => {
        const keyText = key.textContent;

        if (keyText === keyName) {
            key.style.backgroundColor = "red";
        }
    });
});

document.addEventListener("keyup", (event) => {
    const keyName = event.key.toUpperCase();

    keys.forEach((key) => {
        const keyText = key.textContent;

        if (keyText === keyName) {
            key.style.backgroundColor = "#fff";
        }
    });
});
