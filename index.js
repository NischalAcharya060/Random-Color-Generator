const colorCodeElement = document.getElementById("color-code");
const buttonElement = document.getElementById("btn");

const getRandomColorCode = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    return "#" + randomNumber.toString(16);
};

document.getElementById("copy-btn").addEventListener("click", () => {
    const colorCode = document.getElementById("color-code").innerText;
    navigator.clipboard.writeText(colorCode);
});


const setColorCode = (colorCode) => {
    colorCodeElement.innerText = colorCode;
    document.body.style.backgroundColor = colorCode;
};

buttonElement.addEventListener("click", () => {
    const randomColorCode = getRandomColorCode();
    setColorCode(randomColorCode);
});

setColorCode(getRandomColorCode());