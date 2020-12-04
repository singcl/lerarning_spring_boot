(function () {
    const App = Vue.extend({
        template: '#uploadTemplate',
        data() {
            return {
                fileList: []
            };
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }
    })

    //
    const vm = new Vue({
        el: '#app',
        template: '<App />',
        components: {
            App
        }
    })
})();