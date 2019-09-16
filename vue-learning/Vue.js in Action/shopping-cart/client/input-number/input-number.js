Vue.component('input-number', {
    template: "\
    <div class='input-number'>\
    <button @click='handleAdd' :disabled='value >= max'>+</button>\
     <input type='text' :value='currentValue' @change='handleInputChange'\
     @keydown.up='handleAdd' @keydown.down='handleReduce'>\
    <button @click='handleReduce' :disabled='value <= min'>-</button>\
    </div>",
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        },
        step: {
            type: Number,
            default: 1
        },
        decimal: {
            type: Number,
            default: 2
        }
    },

    data: function () {
        return {
            currentValue: this.value
        }
    },

    watch: {
        currentValue: function (value) {
            this.$emit('input', value);
        },

        value: function (value) {
            this.updateValue(value);
        }
    },

    mounted: function () {
        this.updateValue(this.value);
    },
    methods: {
        isValidNumber: function (value) {
            var reg = /(^-?(([1-9][0-9]*)|0)\.{1}\d+$)|(^-?[1-9][0-9]*$)|(0{1}$)/;
            return reg.test(value + '');
        },

        handleInputChange: function (e) {
            var value = e.target.value.trim();
            if (!this.isValidNumber(value)) {
                e.target.value = this.currentValue;
                return;
            }
            value = Number(value);
            this.updateValue(value);
            this.currentValue = value.toFixed(this.decimal);
        },
        handleAdd: function () {
            if (this.currentValue < this.max) {
                this.currentValue += this.step;
            }
        },
        handleReduce: function () {
            if (this.currentValue > this.min) {
                this.currentValue -= this.step;
            }
        },
        updateValue: function (value) {
            if (value > this.max) {
                value = this.max;
            } else if (value < this.min) {
                value = this.min;
            }
            this.currentValue = value;
        }
    }
});