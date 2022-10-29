(function(){
    let me = {};

    let form = document.querySelector('.form-container');
    let closeButton = null;

    function CloseButtons(){
        document.querySelector('.btn-down').classList.remove("is_close", "transform");
        closeButton.removeEventListener('click', onClose)
    }

    function onClose(e){
        e.preventDefault();
        CloseButtons();
        me.close();
    }

    me.open = function(){
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        if(closeButton){
            closeButton.addEventListener('click', onClose);
        }
    }

    me.close = function(){
        form.classList.add('is-hidden');
    }

    document.addEventListener('keydown', function (e) {
        if(e.key === "Escape"){
            CloseButtons();
            me.close();
        }
    }); 

    me.isAllCompleted = function(data){
        let result = true;

        for(let i = 0; i < data.length; i++){
            if(MY.validation.isEmpty(data[i].value)){
                result = false;
                break;
            }
        }
        return result;
    };
     
    me.isValid = function(){
        if(!me.isAllCompleted(document.querySelectorAll('.form__input'))){
            console.log("Enter the Data")
            return false;
        } else if(!MY.validation.isEmail(document.querySelector('[data-email]').value)){
            console.log("Enter the correct Email")
            return false;
        } else if(!MY.validation.isNumber(document.querySelector('[data-number]').value)){
            console.log("Enter the correct Number")
            return false;
        }
        return true;
    };

    MY.form = me;
}());