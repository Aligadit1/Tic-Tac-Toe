"use strict";
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let player = true; // playerX = true & playerY = false,
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const resetGame = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    player = true;
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player) {
            box.innerText = "X";
            player = false;
            box.disabled = true;
        }
        else {
            box.innerText = "O";
            player = true;
            box.disabled = true;
        }
        checkWinner();
    });
});
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                showWinner(p1);
            }
        }
    }
};
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", resetGame);
newGameBtn === null || newGameBtn === void 0 ? void 0 : newGameBtn.addEventListener("click", resetGame);
