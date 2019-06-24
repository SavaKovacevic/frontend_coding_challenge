# Frontend coding challenge

Office locations and contact details for a company which has offices around the globe.

## Prerequisites

For this project you will need node.js and npm for running packages. To check if you already have node.js installed on your computer run teminal and type:
```
node -v
```
If value is returned then node is installed. Others means node is not installed.
```
node -v
v10.13.0
```
Same goes with npm. In terminal type:
```
npm -v
```
Again if value is returned then npm is installed.
```
npm -v
6.4.1
```

If you find that node is not installed on your computer head to node.js download page nodejs.org/en/download/ and get the version you need.
After installation see where node was installed and check the version. Go to terminal and type:
```
which node
/usr/local/bin/node
node -v
v10.13.0
```
To check is installation was succesful in terminal run:
```
node
```
and then
```
console.log("node is working");
```
if you get reply 'node if working' the installation was successful. Now exit node
```
.exit
```
For installing npm in terminal run
```
sudo npm install npm -g
```
Now check if npm is installed successful and, again, if value is returened npm is successfully installed
```
npm -v
6.4.1
```

### Clone repository

Under this repository name, click Clone or download green button. Now copy displayed link. Open terminal and navigate to destination where you want to clone repository
```
cd YOUR-REPOSITORY-DESTINATION
```
Now type git clone and paste URL copied from github
```
$ git clone https://github.com/USERNAME/REPOSITORY
```
Press enter and repository will be cloned.

### Run locally

After all previous steps we need to install packages to run project locally. To do that in terminal run
```
npm install
```
This command will install all dependencies which are necessary for running project. Wait until installation is complete. 
Now project is ready to run. In terminal start gulp watch task and new browser window will be opened
```
gulp watch
```
If you want to see completed project navigate to docs folder in repository and open index.html
You can also see it at https://savakovacevic.github.io/frontend_coding_challenge/
If you make any changes and want to use it in local or web withohut gulp watch task preform gulp build task
```
gulp build
```
New docs folder with changes will be created in repository and it is ready to use.

