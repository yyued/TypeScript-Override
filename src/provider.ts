import * as vscode from 'vscode';

export class OverrideSnippetsProvider implements vscode.CompletionItemProvider {

    provideCompletionItems (document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {
        
        return new Promise((resole, reject) =>{
            
            const lineText = document.getText(new vscode.Range(position.with(undefined, 0), position));
            
            console.log(lineText)

            return resolve([]);
        });
    
    }
}