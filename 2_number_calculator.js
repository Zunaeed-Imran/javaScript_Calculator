document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.input')
    .forEach(element =>{
        element.addEventListener('click',function(){
            console.log(element);
        })
    })
})