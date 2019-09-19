new Vue({
    el: app,
    data: {
        showModal: false
    },
    methods: {
        handleEditButtonClick: function () {
            this.showModal = !this.showModal;
        }
    }
});