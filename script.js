let form = document.querySelector('form');
let userNumInput = document.querySelector('.getNum');
let fullmarksInput = document.querySelector('.fullmarks');
let parcentageDisplay = document.querySelector('.parcentage');
let statusDisplay = document.querySelector('.status');
let submitBtn = document.querySelector('.btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userNum = parseInt(userNumInput.value);
    let fullmarks = parseInt(fullmarksInput.value);
    if (!isNaN(userNum) && !isNaN(fullmarks) && fullmarks !== 0) {
        let parcentageVal = (userNum / fullmarks) * 100;
        parcentageDisplay.textContent = `${parcentageVal.toFixed(2)}%`;
        statusDisplay.textContent = parcentageVal >= 30 ? 'Pass' : 'Fail';
    } else {
        parcentageDisplay.textContent = 'Invalid input';
        statusDisplay.textContent = 'Invalid input';
    }
})