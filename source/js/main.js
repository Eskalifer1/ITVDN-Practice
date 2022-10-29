window.addEventListener("load", function(){
    
    let openFormButton = document.querySelector('.btn-down');


    if(openFormButton){
        openFormButton.addEventListener('click', function(){
            openFormButton.classList.toggle("transform");

            openFormButton.classList.toggle("is_close");

            if(openFormButton.classList.contains("is_close")){
                form.open();
            } else {
                form.close();
            }
        })
    }
}, false)
