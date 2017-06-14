A Bootstrap project for creating application/configuration/customizations for PaperTrail

See [gradle-build](https://github.com/egis/gradle-build) and  
[build-tools](https://github.com/egis/build-tools)

## Quick Start

```

brew install cookiecutter

#clone your git repo eg. (git clone git@github.com:Me/Project1.git)
cookiecutter gh:egis/ProjectBootstrap -o Project1

#enter the name for the compiled package: (Project1)
#enter the name of your Git Repo: (Project1)

gradle setup
gradle idea

<add  your project files>
git commit -m "initial commit" -A
git push origin master
```

### Updating
You can update an existing project using:
```
cookiecutter gh:egis/ProjectBootstrap -f
```

## Dependencies

* Gradle
* Java 8 SDK
* PaperTrail CLI
* Node.js


## PT-SCRIPTS

**PT-SCRIPTS** are special folders inside deployment packages that are treated differently it handles and deploys

* `install.groovy` for running arbritrary groovy scripts on deployment
* Document archives 
* Workflows 

## Directory Structure

* `upgrade` PT-SCRIPTS folder - Only included in the `-upgrade` bundle
* `install` PT-SCRIPTS folder - Only included in the `-install` bundle
* `resources` Import / updates documents using a node structure - See [System Nodes](http://support.papertrail.co.za/Reference/System-Nodes/)
e.g.
```
System/
	scripts/
	reports/
	images/
	templates/
```
* `src` [Javascript](http://developer.papertrail.co.za/front-end/Plugins.html) or [Groovy](http://developer.papertrail.co.za/back-end/Scripting.html) based source files
* `test` Groovy based source files see [Java Remote API](http://developer.papertrail.co.za/Remote/java-text.html)
* `libs` JAR dependencies required by Groovy `src` classes
* `test-libs` JAR dependencies required Groovy `test` classes
* `package.json`
* `build.gradle`


## Building

### Using the pt cli:
* `pt build` OR `pt build --watch`

### Using the underlying tools directly

* `gradle setup`  
downloads Java dependencies to `libs` and `test-libs`
* `gradle upgrade` or `gradle install`  
create and installation package to `build/distributions`  
* `npm run build`  
Compile the Javascript files to `build`
* `npm run dev`  
Compile javascript and deploy them to `$WORK_DIR` for hot reload
* `gradle test`

### Quickstart
1. Configure environment for [development](http://developer.papertrail.co.za/Reference/Dev-Environment.html)
1. Shut down the PT process
1. MacOSX: ```mkdir /opt && sudo chown -R `whoami` /opt```
1. `pt upgrade`
1. `cd /opt/Papertrail`
1. `./run.sh`

### Steps to deploy the project to local PaperTrail:
1. Set your workdirectory `export WORK_DIR=/opt/Papertrail`
1. Get the project sourcecode: `git clone projectUrl`
1. Navigate to project dir: `cd clientProject`
1. `gradle setup`
1. `gradle install`
1. `npm run setup`
1. Create a deployment package: `gradle upgrade`
1. Deploy it (be sure to have PT running at this step): `pt deploy build/distributions/*-upgrade.zip`. Check the PT log for errors and make sure there are none.
