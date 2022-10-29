window.addEventListener("load", function(){
    
    let openFormButton = document.querySelector('.btn-down');
    let form = document.querySelector(".form");

    if(openFormButton){
        openFormButton.addEventListener('click', function(){
            openFormButton.classList.toggle("transform");

            openFormButton.classList.toggle("is_close");

            if(openFormButton.classList.contains("is_close")){
                MY.form.open();
            } else {
                MY.form.close();
            }
        })
    }

    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            if(MY.form.isValid()){
                console.log("All is good");
            } else {
                console.log("There is a problem")
            }
        })
    }
}, false)
