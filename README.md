A Bootstrap project for creating application/configuration/customizations for PaperTrail

See [gradle-build](https://github.com/egis/gradle-build) and  
[build-tools](https://github.com/egis/build-tools)

## Quick Start

```

git clone <The custom git repo>
git export https://github.com/egis/ProjectBootstrap
NAME=<name of project> npm run init
gradle setup

<add  your project files>

git commit -m "initial commit" -A
git push origin master
```


## Dependencies

* Gradle
* Java 8 SDK
* PaperTrail CLI
* Node.js


## PT-SCRIPTS

PT-SCRIPTS are special folders inside deployment packages that are treated differently it handles and deploys

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

Ue the pt cli:
`pt build` OR
`pt build --watch`

* `gradle setup` download dependencies in `libs` and `test-libs`
* `gradle upgrade`
* `gradle install`
* `gradle test`
* `gradle npm`
