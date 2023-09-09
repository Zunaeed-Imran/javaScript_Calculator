document.addEventListener('DOMContentLoaded', function(){
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons');
    const equal = document.querySelector('.equal');
    buttons.forEach(element => {
        element.addEventListener('click', function(){
            display.textContent += element.textContent;
        });
    });
    equal.addEventListener('click', function(){
        const inputs = display.textContent.split('');
        inputs.forEach((input, index) => {
            if(input === '+'){
                const num1 = Number(inputs[index - 1]);
                const num2 = Number(inputs[index + 1]);
                const calc = num1 + num2;
                console.log(calc);
                alert(calc);
            }
        })
    })
})