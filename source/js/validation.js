(function(){
    let me = {};

    me.isEmail = function(email){
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
    }

    me.isNumber = function(number){
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(number);
    }

    me.isEmpty = function(str){
        return str.length === 0;
    }
    MY.validation = me;
}());