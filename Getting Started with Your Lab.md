# Getting Started with your Lab Sandbox

## What tools are already installed in this environment?
- Git
- Browser
- create-react-app
- node.js
- npm

## How can I download my files in this lab?
-  Right click on a single file and select "Download".  
   There is not a tool to download your full sandbox for this course  
   at this time, so you'll want to download each file individually. 
      
## Additional Course Specific Notes:

### **Are console logs available to help me troubleshoot my web development work?**<br>
- The embedded VSCode Browser Preview tool does not support   
viewing of browser console logs. However, you can use your   
standard browser inspect element tool to investigate page   
elements in your web applications.

### Managing your Sandbox:
- After opening the lab for the first time or if you have not   
used it for a while, it opens to a blank IDE. If this is the   
case, click on the **Explore** icon on the left column   
(the one that looks like two sheets of paper stacked together).   
Then, click on the **Open Folder** button. In the list that   
appears, select **project** and click **OK.**. 

- Through your coursework, you'll be creating and managing folders   
called **node_modules** for your web development projects.   
If your lab has been inactive for 2 weeks, you may notice that your    
node_modules folder is not present in your sandbox.   
This is expected in your sandbox, so please do not worry!    
To regenerate your node_modules folder, you can:  
  1) Open your terminal and navigate (ex: "cd") to the project   
     folder where you'd like the node_modules folder to be stored.   
     Note: Your package.json file should also be stored in this directory.  

  2) Run the command **"npm install"** which will restore node_modules.  
   
  3) If you have lost your package.json file, you can upload   
  <a href="https://drive.google.com/file/d/1GTmLT8RDjSmCYMbzcYVl5sZWDJ1uu0yd/view?usp=sharing"> this copy</a> to your lab to help restore your files.  

### Setting up your Development Environment: Git and Node 
  
**Reading: Setting up Your Development Environment**

Your development environment is already set up for you as follows:

- **Text editor:** Your text editor will be Visual Studio Code.  
- **Browser:** You will be using the VSCode HTML viewer   
extension as your browser. See **Getting Started with React   
below for instructions on how to use it.**.
- **Command line shell:** You will be using the Bash shell  
 in VSCode. For instructions, see **How can I use the terminal?**  
 in the **Common Questions** section below.   
-**Files required for the exercises:** Follow the instructions   
given in the course. As a reminder, only the files in the /home/coder/project  
 subfolder will persist between sessions and you should store   
 your working files there.

**Reading: Exercise (instructions): Setting up Git**
- Ignore the section **Downloading and Installing Git**.   
Git has already been installed for you.   
Proceed to **Some Global Configuration for Git**

**Reading: Exercise (instructions): Basic Git Commands**

- As a reminder, please create a the subfolder **git-test**   
  under /home/coder/project. You can do this by first clicking   
  on an empty area in the explorer pane so that no file or subfolder is highlighted. Then click the new folder button (second from left).

**Reading: Exercise (instructions): Online Git Repositories**

- Please use github.com for this lab sandbox
- When pushing or cloning, you will initially see a popup message  
- The extension GitHub wants to sign in using GitHub. Be sure   
to press **CANCEL** to close it. There will be a text field   
 on the top of the screen for you to enter the user ID (this should   
 be the email address you use to log in to GitHub) and then again   
 for your password for your remote repository. After entering both,   
 your command should succeed.

**Reading: Exercise (instructions): Setting up Node.js and NPM**
- You will not need to re-install Node.js and npm in your lab   
  as they have already been installed for you.
  
**Reading: Exercise (instructions): Basics of Node.js and NPM**
- Ignore the instructions for Installing an NPM Module.   
You will be using the live server in VSCode instead of lite-server.   
Proceed to **Setting up .gitignore**

### Introduction to React

- After the development server has been started, open   
  the browser preview pane by clicking on the bottom   
  icon on the icon bar on the left. A mini browser will appear.   
  In the address bar, type **localhost:3000** and you will   
  see the app you created appears with a blue reaction graphic.  
- Please use **github.com** for this lab playground   
- When pushing or cloning, you will initially see a popup   
  message **The extension GitHub wants to sign in using GitHub**.   
  Be sure to press **CANCEL** to close it. There will be a text   
  field on the top of the screen for you to enter the user ID   
  (this should be the email address you use to log in to GitHub)   
  and then again for your password for your remote repository.   
- After entering both, your command should succeed.   

**Reading: Exercise (instructions): Configuring your React Application**   
- Add this import line in App.js: **import React from 'react';**   
- Change **extends Component** to **extends React.Component**   

### React Components  

**Reading: Exercise (instructions): React Component Part 1**  
- Change **extends Component** to **extends React.Component**  

**Reading: Exercise (instructions): React Component Part 2**  
- Change **extends Component** to **extends React.Component**  

