const Ui = function () {
    let getNumericInput = id => {
        let result = document.getElementById(id).value;
        return parseFloat(result);
    };

    this.getSensitivity = () => {
        return getNumericInput('sensitivity');
    };

    this.getSpeed = () => {
        return getNumericInput('speed');
    };

    this.getJitter = () => {
        return getNumericInput('jitter');
    };

    this.getEntropy = () => {
        return getNumericInput('entropy');
    };
};
