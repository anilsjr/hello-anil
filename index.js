#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const messageLine1 = "Hey! I’m Anil — full-time developer,"; 
  const messageLine2 = "part-time bug hunter, and forever a learner."
  const messageLine3 = "Whether it’s JavaScript, Node.js, or Flutter," 
  const messageLine4 = "I’m all about building, breaking, and learning!";

  const githubLink = "https://github.com/anilsjr";
  const linkedinLink = "https://www.linkedin.com/in/anilvk/";
  const wesbiteLink = "https://anilsjr.github.io/portfolio";

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `\x1b[38;5;51m+---------------------------------------------------------------+
| \x1b[38;5;105m${messageLine1}\x1b[38;5;51m                     |
| \x1b[38;5;105m${messageLine2}\x1b[38;5;51m             |
| \x1b[38;5;105m${messageLine3}\x1b[38;5;51m            |
| \x1b[38;5;105m${messageLine4}\x1b[38;5;51m          |
+---------------------------------------------------------------+
| \x1b[38;5;93mTwitter:\x1b[0m   \x1b[38;5;39m${githubLink}\x1b[38;5;51m                    |
| \x1b[38;5;93mLinkedIn:\x1b[0m  \x1b[38;5;39m${linkedinLink}\x1b[38;5;51m           |
| \x1b[38;5;93mPortfolio:\x1b[0m \x1b[38;5;39m${wesbiteLink}\x1b[38;5;51m           |
+---------------------------------------------------------------+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
// Call the function to log your details
logDetails();
