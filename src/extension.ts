import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "vstodo" is now active!');


	const disposable = vscode.commands.registerCommand('vstodo.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from Newton!');
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(
		vscode.commands.registerCommand("vstodo.askQuestion", async () => {
			const answer = await vscode.window.showInformationMessage(
				"How was your day?",
				"good",
				"bad"
			);

			if (answer === "bad") {
				vscode.window.showInformationMessage("Sorry to hear that");
			} else {
				console.log({ answer })
			}
		})
	)
}

export function deactivate() { }
