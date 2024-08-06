import { createSourceFile } from 'typescript';
console.log('start');
const sourceFile = createSourceFile('test.ts', 'const a = 10;', 3);
console.log(sourceFile);
console.log('final');
