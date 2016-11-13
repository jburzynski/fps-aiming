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

    this.getEnemyWidth = () => {
        return getNumericInput('width');
    };

    this.getEnemyHeight = () => {
        return getNumericInput('height');
    };

    this.getBackground = () => {
        return document.getElementById('background').checked;
    };
};
