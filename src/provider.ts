import * as vscode from 'vscode';
import { OverrideSnippetsProcess } from "./process"

export class OverrideSnippetsProvider implements vscode.CompletionItemProvider{

    constructor(private process: OverrideSnippetsProcess) { }

    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[]{

        const lineText = document.lineAt(position).text;
        const res = this.process.convert(lineText);

        var completionItems = [];

        const item = new vscode.CompletionItem(res.method, vscode.CompletionItemKind.Snippet);
        item.insertText = res.completion;

        completionItems.push(item)
        return completionItems;
    }

    public resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken): any{
        return item;
    }

    dispose(){ }
}