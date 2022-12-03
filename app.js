//set initial count
let count = 0;


//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else if(styles.contains('save')){

            const saveCount = document.createElement('p');
            const contador = document.createTextNode(count);

            saveCount.appendChild(contador);

            saveCount.className = 'value';

            const contenedor = document.getElementById('contenedor');
            
            contenedor.appendChild(saveCount);
            
        
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    })
});
