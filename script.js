document.getElementById('submit-income').addEventListener('click', function () {
    const income = document.getElementById('income').value;
    const incomeWarning = document.getElementById('income-warning');
    
    if (income === '') {
        incomeWarning.style.display = 'block';
    } else {
        incomeWarning.style.display = 'none';
        // Show the expense box if income is entered
        document.getElementById('expense-box').style.display = 'block';
    }
});

document.getElementById('submit-expense').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const food = parseFloat(document.getElementById('food').value) || 0;
    const travel = parseFloat(document.getElementById('travel').value) || 0;
    const recharge = parseFloat(document.getElementById('recharge').value) || 0;
    const household = parseFloat(document.getElementById('household').value) || 0;
    const other = parseFloat(document.getElementById('other').value) || 0;

    const totalExpenses = food + travel + recharge + household + other;

    if (totalExpenses > 0) {
        document.getElementById('result-box').style.display = 'block';
        document.getElementById('result').innerText = `Total Expenses: $${totalExpenses.toFixed(2)}\nRemaining Income: $${(income - totalExpenses).toFixed(2)}`;
    } else {
        alert("Please enter at least one expense.");
    }
});
