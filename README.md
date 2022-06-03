# hangsout README
![hangsout](hangsout.png)
## Dependencies
- [faviator](https://github.com/faviator/faviator)

## Features
- hangsout(双手离开键盘) 即 save
- hangsout(双手离开键盘) 即 showHover
  - 在有报错下，将依VSCode优先自动显示报错的信息
  - 在有Warn下，VSCode将先显示 Warn
  - TypeScript/JavaScript 有 JsDoc 下，将自动显示为 Markdown 格式 ，为 VSCode 特性

## Thoughts
- 添加一个将当前行中所有的 `-` 转成 `_`
  - vim 宏来解决

## Appendix
- 这是一个 Emacs 中 autosave 的 VSCode 版复刻


## Extension Settings
hangsout delay
## Known Issues

## Release Notes
Users appreciate release notes as you update your extension.

### 0.0.3
- 增加可切换开启保存与 Hover
- 开放设置配置延时时间
-----------------------------------------------------------------------------------------------------------

## Knowledge
### 为扩展添加配置
- [VSCode插件开发全攻略（八）代码片段、设置、自定义欢迎页](http://blog.haoji.me/vscode-plugin-snippets-and-settings.html#du-qu-he-xiu-gai-she-zhi)
### 发布扩展
- `npm i -g vsce`
- `vsce publish` + AzureDevOps token
### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
