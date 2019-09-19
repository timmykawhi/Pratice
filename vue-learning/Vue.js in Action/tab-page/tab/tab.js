Vue.component('tab', {
    template: '#tab',
    data: function () {
        return {
            currentTabId: '',
            navList: []
        };
    },
    computed: {
        tabClass: function (id) {
            return [
                'tab-nav',
                {
                    'active-tab-nav': this.currentTabId === id
                }
            ]
        }
    },
    method: {
        handleTabClick: function (id) {
            this.currentTabId = id;
        },
        updateNavList: function () {
            let children = this.children;
            if (children.$options.name === pane) {
                this.navList.push({
                    name: children.name,
                    label: children.label
                });
            }
        }
    },
    mounted: function () {
        this.updateNavList();
    }
});