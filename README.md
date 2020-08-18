### generator-vue
使用yeoman发布一个generator vue案例

### 如何创建自定义generator
- 特定的项目结构
- 名称必须是gegerator-<name> 如果不这样命名， yeoman就不能找到该generator
- 创建generator的核心入口文件,目录为app/index.js， 需要导出一个Yemoman Generator的类型，Yemoman Generator在工作时会自动调用我们在此类型中定义的一些生命周期方法，如下
- 在app/templates下创建模板，支持ejs语法， 模板极大的提高了效率
