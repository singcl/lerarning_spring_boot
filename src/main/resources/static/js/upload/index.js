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
            },
            handleSuccess(response, file, fileList) {
                console.log(response, file, fileList);
                this.$message({
                    message: '上传成功',
                    type: 'success',
                    duration: 1000,
                    onClose: function() {
                        window.location.reload();
                    }
                });

            },
            handleError(err, file, fileList) {
                console.log(err, file, fileList)
                this.$message({
                    message: '上传失败',
                    type: 'error',
                    duration: 1000
                });
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