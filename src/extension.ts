'use strict';
import * as vscode from 'vscode';
import { OverrideSnippetsProcess } from './process';
import { OverrideSnippetsProvider } from './provider';

let config = null;
export function activate(context: vscode.ExtensionContext) {
    config = vscode.workspace.getConfiguration('');

    const process = new OverrideSnippetsProcess(config);
    let provider = new OverrideSnippetsProvider(process);

    const LANS = ['typescript', 'typescriptreact'];

    for(let lan of LANS) {
        let providerDisposable = vscode.languages.registerCompletionItemProvider(lan, provider);
        context.subscriptions.push(providerDisposable);
    }
}

// this method is called when your extension is deactivated(禁用)
export function deactivate() {
}