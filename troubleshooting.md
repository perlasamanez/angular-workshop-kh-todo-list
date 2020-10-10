# Troubleshooting Helpful Guide

## Issues with installing Angular or setting up the project

If encountering any problems, they usually get solved by making sure we have the latest version of NodeJS, npm, and the CLI itself.

### Updating NodeJS:
Go to https://nodejs.org/en/ and download the latest version. Make sure to uninstall (all) installed versions in your computer.

### Updating npm:
Run `npm install -g npm` (if on Linux or Mac, add `sudo`).

### Updating CLI 
Run `npm uninstall -g angular-cli @angular/cli` (Add `sudo` if Linux or Mac).

### Address already in use 
Quit if you already have another `ng serve` process running or change ports by doing `ng serve --port ANOTHERPORT`.

### App not compiling
Check the console, that might have the error. If not, make sure you have the latest CLI version and try restarting it.

### For any other errors...
Let's google it together! 