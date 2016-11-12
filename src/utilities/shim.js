document.addEventListenerExperimental = function (type, listener, useCapture) {
    document.addEventListener(type, listener, useCapture);
    document.addEventListener('moz' + type, listener, useCapture);
    document.addEventListener('webkit' + type, listener, useCapture);
    document.addEventListener('ms' + type, listener, useCapture);
};
