'use strict';
import * as vscode from 'vscode';
import { OverrideSnippetsProvider } from './provider';

// let config = null;
export function activate(context: vscode.ExtensionContext) {
    // config = vscode.workspace.getConfiguration('');
    let provider = new OverrideSnippetsProvider();

    const LANS = ['typescript', 'typescriptreact'];

    for(let lan of LANS) {
        let providerDisposable = vscode.languages.registerCompletionItemProvider(lan, provider);
        context.subscriptions.push(providerDisposable);
    }
}