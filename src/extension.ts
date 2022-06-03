// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hangsout" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // let disposable = vscode.commands.registerCommand('hangsout.helloWorld', () => {
  // 	// The code you place here will be executed every time your command is executed
  // 	// Display a message box to the user
  // 	vscode.window.showInformationMessage('Hello World from hangsout!');
  // });

  let ishangsoutShowHoverEnable=true;
  let ishangsoutSaveEnable=true;
  let delay: number|undefined =vscode.workspace.getConfiguration().get('hangsout.delay')
  console.log('hangsout delay',delay);
  
  let hangsoutSavetimer:NodeJS.Timeout|0=0;

  let hangsoutShowHovertimer:NodeJS.Timeout|0=0;

  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => {
  console.log('配置发生变化！');
  delay = vscode.workspace.getConfiguration().get('hangsout.delay')
}));



  const hangsoutSave = ()=>{
    if (!ishangsoutSaveEnable) {return;};

    if (hangsoutSavetimer!==0) {clearTimeout(hangsoutSavetimer);};
    hangsoutSavetimer = setTimeout(()=>{
    vscode.workspace.saveAll();
    vscode.commands.executeCommand('editor.action.showHover');
    console.log('%c hangsout is save','background:#aaa;color:#bada55');
    },delay||3000);
  };
  const hangsoutShowHover = ()=>{
    if (!ishangsoutShowHoverEnable) {return;};

    if ( hangsoutShowHovertimer!==0) {clearTimeout( hangsoutShowHovertimer);};
     hangsoutShowHovertimer = setTimeout(()=>{
    vscode.commands.executeCommand('editor.action.showHover');
    console.log('%c hangsout is and showHover','background:#aaa;color:#bada55');
    },delay||3000);
  };


  vscode.commands.registerCommand("hangsout.hangsoutShowHoverEnable",()=>{
     ishangsoutShowHoverEnable=true;

  });
  vscode.commands.registerCommand("hangsout.hangsoutShowHoverDisable",()=>{
     ishangsoutShowHoverEnable=false;

  });
  
  vscode.commands.registerCommand("hangsout.hangsoutSaveEnable",()=>{
      ishangsoutSaveEnable=true;

  });
  vscode.commands.registerCommand("hangsout.hangsoutSaveDisable",()=>{
      ishangsoutSaveEnable=false;

  });
  



  vscode.window.onDidChangeTextEditorSelection((event)=>{
    hangsoutSave(); 
hangsoutShowHover();
  });

  // context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
