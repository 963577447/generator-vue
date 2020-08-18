const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    prompting(){
        return this.prompt([{
            type:'input',
            name:'name',
            message: 'your project name:',
            default: this.appname
        }])
        .then(answers => {
            this.answers = answers
        })
    }
    writing(){
        const templates = [
            'public/favicon.ico',
            'public/index.html',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/App.vue',
            'src/main.js',
            '.gitignore',
            'package.json',
            'babel.config.js',
            'README.md',
            'yarn.lock'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers // 传递的上下文
            )
        })   
    }
}