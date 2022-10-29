window.addEventListener("load", function(){
    
    let openFormButton = document.querySelector('.btn-down');
    let form = document.querySelector(".form");
    let nav = document.querySelector(".nav");

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
    };

    toggleToActiveLink = function(target){
        let links = document.querySelectorAll(".nav_link");
        let showedSection = target.dataset.link;

        for(let i = 0; i < links.length; i++){
            if(links[i].classList.contains("nav_link_active")){
                links[i].classList.remove("nav_link_active");
            }
        }
        target.classList.add('nav_link_active');
    };

    function scrollToActiveSection(showedSection){
        let section = document.querySelector('.' + showedSection);
        let coords = section.getBoundingClientRect();
        
        let timerID = setInterval(function(){
            if(window.scrollY < coords.y){
                window.scrollBy(0, 15)
            } else {
                clearInterval(timerID);
            }
        }, 0.2)
    }

    if(nav){
        nav.addEventListener("click", function(e){
            let targ = e.target;
            let showedSection = targ.dataset.link;

            if(targ.tagName.toLowerCase() !== 'a'){
                return;
            }
            e.preventDefault();
            toggleToActiveLink(targ);
            scrollToActiveSection(showedSection);
        })
    };
}, false)
