A Bootstrap project for creating application/configuration/customizations for PaperTrail

See [gradle-build](https://github.com/egis/gradle-build) and  
[build-tools](https://github.com/egis/build-tools)

## Quick Start

```

brew install cookiecutter
cookiecutter gh:egis/ProjectBootstrap
#enter the name for the compiled package
#enter the name of your Git Repo
gradle setup

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
* Document archives e.g. Form exports
* Workflow Exports

## Directory Structure

* `upgrade` PT-SCRIPTS folder - Only included in the `-upgrade` bundle
* `install` PT-SCRIPTS folder - Only included in the `-install` bundle
* `resources` Import / updates documents using a folder structure - Always included
e.g.
```
System/
	scripts/
	reports/
	images/
	templates/
```
* `src` [Javascript](http://developer.papertrail.co.za/portal/plugins/) or [Groovy](http://developer.papertrail.co.za/scripting/) based source files
* `test` Groovy based source files see [Java Remote API](http://developer.papertrail.co.za/java/)
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


## Quickstart steps of existing client project based on ProjectBootstrap

### Install PaperTrail locally if not yet:
1. Install Python
1. Install pt CLI tool: `sudo pip install git+https://github.com/egis/papertrail-python-cli --upgrade`
1. Create /opt dir if it doesn't exist yet: `mkdir /opt`
1. Otherwise change its owner for pt to work fine:
``sudo chown -R `whoami` /opt``
1. Install fresh PaperTrail: `pt upgrade`
1. Symlink a PT/work dir for dev scripts: `ln -s /opt/Papertrail /opt/Papertrail/work`
1. `chmod +x /opt/Papertrail/run.sh`
1. Shut down the PT process if 'pt upgrade' started it
1. `cd /opt/Papertrail`
1. Change the conf/papertrail.properties as per instructions [here](https://github.com/egis/PT/blob/master/BUILDING.md#building). Plus to those make sure you set "license" property to one allowing for workflows, and also this set of additional properties is recommended:
```
query.multiple.nodes=true
smtp.port=3025
smtp.server.enable=true
smtp.server.port=3025
http.port=8080
conversion.oo.disable=true
http.cache.disable=true
session.db.lookup=true
```
Lastly, run PT: `./run.sh`

### Steps to upgrade PaperTrail locally:
1. Shut down the PT process
1. `pt upgrade`
1. `cd /opt/Papertrail`
1. `./run.sh`

### Steps to deploy the project to local PaperTrail:
1. Get the project sourcecode: `git clone projectUrl`
1. Navigate to project dir: `cd clientProject`
1. `gradle setup`
1. `gradle install`
1. Install NPM packages: `npm run setup`
1. Create a deployment package: `gradle upgrade`
1. Deploy it (be sure to have PT running at this step): `pt deploy build/distributions/myproject-upgrade.zip`. Replace the zip filename with the one for your project. Check the PT log for errors and make sure there are none.
1. Export PT work dir to env var for 'npm run dev' to work correctly: `export WORK_DIR=/opt/Papertrail`
1. `npm run dev`
