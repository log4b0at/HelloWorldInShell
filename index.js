

import ShellApp from 'osjs-shell-app';

var myShellApp = new ShellApp('HelloWorldInShell');

myShellApp.start();

myShellApp.on('done', () => {
    let shell = myShellApp.core;
    global.shell = shell;
    shell.println('Hello world!');

    shell.stdin("What's your name?").then( name => {
        shell.println('Hello '+name+' ! ');
        setTimeout( () => myShellApp.window.close(), 1500 );
    })
})