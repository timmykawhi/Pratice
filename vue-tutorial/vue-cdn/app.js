new Vue({
    el: "#app",
    data: {
        name: "kawhi",
        job: "web developer",
        tag: "<p>kawhi</p>",
        age: 27,
        x: 0,
        y: 0
    },

    computed:{
        sumXy: function() {
            console.log("computed");
            return this.x + this.y;
        }
    },

    methods: {
        sumXY: function() {
            console.log("sumXY");
            return this.x + this.y;
        },

        greet: function() {
            console.log("greet");
            return "hello" + this.name;
        },

        add: function() {
            this.age++;
        },
        updateXy: function(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },

        changeJob: function(e) {
            console.log(e);
            this.job = e.target.value;
        },

        changeName: function() {
            this.name = this.$refs.nameInput.value;
        }
    }
});