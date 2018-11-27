var loggedIn = false;
var cmd;

var prompt = "C:/> ";
var inputBox = '<input id="consoleInput" onblur="this.focus();" type="text" style="color: {};">';

var username = "";
var pword = "";

var u = "liam";
var p = "password";

var currentColour = "deepskyblue";

var menuItems;

function date() {
	
	var d = new Date();
	return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " on " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
	

}

function setup() {
	
	cmd = document.getElementById("commandPrompt");
	
	menuItems = document.getElementsByClassName("menuItem");
	
	writeToConsole("<p>Initializing console...<br>Finding Appropriate redirectory...</p>");
	sendPrompt("Login: ");
	
}

function sendPrompt(request) {

	writeLineToConsole(request + inputBox.replace("{}",currentColour));
	focusInput();
	
}

function focusInput() {
	
	document.getElementById("consoleInput").focus();
	
}

function stripInputFromConsole(data) {
	
	cmd.innerHTML = cmd.innerHTML.replace(inputBox.replace("{}",currentColour)+"</p>",data);
	
}

function key(e) {
	
	if (e.key == "Enter") {
		
		execute(document.getElementById("consoleInput").value); 	
		
	}
	
}

function execute(d) {
	
	// Split the incoming command
	data = d.split(" ");
	command = data[0];
	
	if (command == "clear") {
		
		cmd.innerHTML = "";
		sendPrompt(prompt);
		
	}
	
	else if (!loggedIn) {
		
		if (username == "") {
			
			if (command == u) {
				
				username = command;
				stripInputFromConsole(d);
				sendPrompt("Password: ");
				
			}
			
			else {
				
				stripInputFromConsole(d);
				writeLineToConsole("Incorrect username!");
				sendPrompt("Login: ");
				
			}
			
		}
		
		else {
			
			if (command == p) {
				
				username = command;
				stripInputFromConsole(d);
				loggedIn = true;
				writeLineToConsole("Welcome to the system...");
				sendPrompt(prompt);
				
			}
			
			else {
				
				stripInputFromConsole(d);
				writeLineToConsole("Incorrect password!");
				sendPrompt("Password: ");
				
			}
			
		}
		
	}
	
	else {
		
		if (command == "logout") {
			
			loggedIn = false;
			username = "";
			pword = "";
			stripInputFromConsole(d);
			writeLineToConsole("Logged out successfully...");
			sendPrompt("Login: ");
			
		}
		else if (command == "help") {
			
			stripInputFromConsole(d);
			writeLineToConsole("'run' to run a program<br>'exit' to exit the system<br>'find' to find a file<br>'color' to change console colour<br>'time' to display the time<br>'background' to change the background, you must enter the image address after typing in background");
			sendPrompt(prompt);
		}	
		else if (command == "color" || command == "colour") { 
		
			changeColour(data[1]);
			stripInputFromConsole(d);
			sendPrompt(prompt);
			
			
		}
		else if (command == "background") {
			
			changebackground(data[1]);
			stripInputFromConsole(d);
			sendPrompt(prompt);
			
		}

		else if (command == "find") {
			
			stripInputFromConsole(d);
			document.getElementById("fileHandler");
			sendPrompt(prompt);
			

		}
		else if (command == "time") {
			
			stripInputFromConsole(d);
			writeLineToConsole(date());
			sendPrompt(prompt);
		
		}
		else if (command == "exit") {
			stripInputFromConsole(d);
			writeLineToConsole("Exiting the program...")
		}

		else {
				
			stripInputFromConsole(d);
			sendPrompt(prompt);
			
		}
		
	}
	
}

function writeToConsole(text) {
	
	cmd.innerHTML = cmd.innerHTML + text;
	
}

function writeLineToConsole(text) {
	
	cmd.innerHTML = cmd.innerHTML + "<p>" + text + "</p>";
	
}

function changeColour(c) {

	document.getElementById("commandPrompt").style.color = c;
	document.getElementById("commandPrompt").style.borderColor = c;
	document.getElementById("footer").style.backgroundColor = c;
	document.getElementById("consoleInput").style.color = c;
	document.getElementById("header").style.backgroundColor = c;
	
	currentColour = document.getElementById("consoleInput").style.color;
	
	
	
	
}
function changebackground(b) {
	
	document.getElementById("cmdContent").style.backgroundImage = "url("+ b +")";
	
}
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function openAbout() {
    var x = document.getElementById("aboutPage");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}