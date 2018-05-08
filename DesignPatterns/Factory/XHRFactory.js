// SimpleHandler class
var SimpleHandler = function() {};
SimpleHandler.prototype = {
    request: function(method, url, callback, postVars) {
        var xhr = this.createXhrObect();
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200) {
                callback.success(xhr.responseText, xhr.responseXML)
            } else {

                callback.failure(xhr.status);
            }
        };
        xhr.open(method, url, true);
        if (method !== 'POST') {
            postVars = null;
        }
        xhr.send(postVars);
    },

    // Factory method
    createXhrObect: function() {
        var methods = [
            function() {
                return new XMLHttpRequest();
            },
            function() {
                return new ActiveXObject('Msxml2.XMLHTTP');
            },
            function() {
                return new ActiveXObject('Microsoft.XMLHTTP');
            },
        ];

        for (var i = 0, l = methods.length; i < l; i++) {
            try {
                methods[i]();
            } catch (e) {
                continue;
            }
            //if reach this point methods[i] worked
            this.createXhrObect = methods[i]; //memorize createXhrObject
            return methods[i]();
        }

        //if reach this point,none of the method worked
        throw new Error('SimpleHandler: Could not create XHR Object');
    }
};

// QueueHandler Class
var QueueHandler = function() {

};
extend(QueueHandler, SimpleHandler);

function extend(subClass, superClass) {
    var emptyClass = function() {};
    var superClassPrototype = superClass.prototype;
    emptyClass.prototype = superClassPrototype;
    var subClassPrototype = new emptyClass();
    subClassPrototype.constructor = subClass;
    subClass.prototype = subClassPrototype;

    // reduce coupling between sub class and super class
    subClass.superClass = superClassPrototype;
    // handle situation of subClass is Object
    if (superClassPrototype.constructor === Object.prototype.constructor) {
        superClassPrototype.constructor = superClass;
    }
}