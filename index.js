

import ShellApp from 'osjs-shell-app';

// In fact, ShellApp is just a shortcut for create an OS.js application linked to ShellCore
var myShellApp = new ShellApp('HelloWorldInShell');

// Let start ( this create the process and open the window )
myShellApp.start();

//The 'done' event is emitted when the render of the ShellCore is 
myShellApp.on('done', () => {
    let shell = myShellApp.core;
    global.shell = shell; // Here is the ShellCore instance (in shell
	
	// Hello wolrd !!
    shell.println('Hello world!');

	/* 
		'stdin' is Asynchronous, but you can print text after that!
		stdin have 1 arguments, but you can ignore it
		This argument was built into the function to allow you to put text before the entry, 
		because it is not possible with a simple shell.print,
		because the entry does it always on a single line, for worries ergonomics.
	*/
    shell.stdin("What's your name?").then( name => {
		// Let's inject some HTML code ;)
        shell.println('Hello <span style="color:yellow">'+name+'</span> ! ');
		// Close the shell after 1500ms by the property myShellApp.window (it store the Window instance of the OS.js process)
        setTimeout( () => myShellApp.window.close(), 1500 );
    });
})

/* IN: myShellApp YOU HAVE: (Since osjs-shell-app@1.0.4)
	myShellApp.core : The ShellCore instance
	myShellApp.window : The window instance
	myShellApp.start() : Start the process and window
	EVENTS:
		myShellApp.on('done') : After process loaded and window was rendered
		myShellApp.on('started') : When the process was created
	
   IN: myShellApp.core YOU HAVE:
	core.print() : Print html to shell
	core.println() : Same with '\n' after
	async core.stdin() : Request the standard input
	core.input : The Input instance
*/