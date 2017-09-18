export class OverrideSnippetsProcess {
    constructor(private config: any) { }

    convert(text: string) {
        
        var className = "vcDealloc(name: string)"
        var extendMethod = "super.vcDealloc(name)"

        return { method: className, completion: `/* Override **/\n${className} {\n\t${extendMethod}\n\t// write your code here\n\t\n}` };
    }
}