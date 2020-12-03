(function () {
    const App = Vue.extend({
        template: `
<el-container>
  <el-header>
  <div class="main-header">
  <i class="el-icon-cloudy-and-sunny main-header__brand"></i>
  <span class="main-header__title">JAVA Cloud</span>
</div>
</el-header>
  <el-container>
    <el-aside width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</el-aside>
<el-container>
 <el-main>
 <div class="main-container">
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
      <div>
      <el-link href="/FileUpload/Index" type="primary" target="_blank">文件上传</el-link>
      <el-link href="/ImageUpload/Index" type="primary" target="_blank">图片上传</el-link>
      <el-link href="/BigFileUpload/Index" type="primary" target="_blank">大文件上传</el-link>
      <el-link href="/MultiPickerUpload/Index" type="primary" target="_blank">多选择器多文件上传</el-link>
</div>
<div>
<el-link href="/good" type="primary" target="_blank">Good</el-link>
<el-link href="/upload" type="primary" target="_blank">简单文件上传</el-link>
</div>
</div>
</el-main>
<el-footer>
<div class="main-footer">
<span class="main-footer__copyright">Copyright 2020-{{new Date().getFullYear()}}</span>
<el-link type="success" href="https://imcoco.top" target="_blank">https://imcoco.top</el-link>
</div>
</el-footer>
    </el-container>
  </el-container>
</el-container>
`,
        methods: {
            goBack() {
                console.log('go back');
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    })

    //
    const vm = new Vue({
        el: '#root',
        template: '<App />',
        components: {
            App
        }
    })
})();