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

	let timer:NodeJS.Timeout|0=0;
	vscode.window.onDidChangeTextEditorSelection((event)=>{
		if (timer!==0) {clearTimeout(timer);};
		timer = setTimeout(()=>{
		vscode.workspace.saveAll();
		vscode.commands.executeCommand('editor.action.showHover');
		console.log('%c hangsout is save and showHover','background:#aaa;color:#bada55');
		},500);
	});

	// context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
