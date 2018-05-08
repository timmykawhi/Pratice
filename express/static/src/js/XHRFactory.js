// SimpleHandler class
var SimpleHandler = function() {};
SimpleHandler.prototype = {
    request: function(method, url, callback, postVars) {
        var xhr = this.createXhrObect();
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return;
            }
            (xhr.status === 200) ? callback.success(xhr.responseText, xhr.responseXML):
                callback.failure(xhr.status);
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

window.onload = function() {
    var myHandler = new SimpleHandler();
    var callback = {
        success: function(responseText) { alert('Succes: ' + responseText); },
        failure: function(statusCode) { alert('Failue: ' + statusCode); }
    };
    myHandler.request('GET', '/api/test/', callback);
};