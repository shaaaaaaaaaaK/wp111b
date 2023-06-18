const targetNumber = Math.floor(Math.random() * 100) + 1;

// 取得猜數字相關的 DOM 元素
const guessInput = document.querySelector('#guessInput');
const result = document.querySelector('#result');

// 檢查猜測的數字
function checkGuess() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        result.textContent = '請輸入有效數字';
        result.style.color = 'red';
    } else if (guess < 1 || guess > 100) {
        result.textContent = '請輸入 1 到 100 之間的數字';
        result.style.color = 'red';
    } else if (guess < targetNumber) {
        result.textContent = '太低了！再猜一次';
        result.style.color = 'blue';
    } else if (guess > targetNumber) {
        result.textContent = '太高了！再猜一次';
        result.style.color = 'blue';
    } else {
        result.textContent = '恭喜你猜對了！';
        result.style.color = 'green';
        guessInput.disabled = true;
    }

    guessInput.value = '';
    guessInput.focus();
}

// 設定輸入框按下 Enter 鍵時執行 checkGuess 函式
guessInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});