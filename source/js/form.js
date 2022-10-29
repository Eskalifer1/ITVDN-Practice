window.addEventListener("load",function(){
    let me = {};

    let form = document.querySelector('.form-container');
    let closeButton = null;

    function onClose(e){
        e.preventDefault();
        document.querySelector('.btn-down').classList.remove("is_close", "transform");
        me.close();
        closeButton.removeEventListener('click', onClose)
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

    window.form = me;
},false)