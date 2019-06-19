# BootstrappedIronMan

### Installation 
[![CircleCI](https://circleci.com/gh/egis/BootstrappedIronMan.svg?style=svg&circle-token=d88417ff93c9732d08a7ac9a1b6964d1259e516a)](https://circleci.com/gh/egis/BootstrappedIronMan)

[![DEV](https://img.shields.io/badge/Environment-DEV-green.svg)](https:///BootstrappedIronMan-dev.papertrail.co.za)

## Dev env & UAT

### Deployment
First install node 8.10.0+, yarn 1.5.1+ and gradle 2.7.
Then use these steps to deploy to your PT instance:
```
yarn
gradle setup
gradle jar
gradle upgrade
gradle install
pt deploy build/distributions/*-install.zip
pt deploy build/distributions/*-upgrade.zip
```

### Dev mode
The most convenient dev env for plugins is via [Browsersync](https://github.com/egis/build-tools/#browsersync). 
To set this up,
* in one terminal window run `cd BootstrappedIronMan && yarn dev`
* in another terminal window run `cd build-tools && yarn browsersync -- --plugin=BootstrappedIronMan`

Normal standalone `npm run dev` dev env works too.

#### Windows development env
* download and install nvm in c:\app\nvm (better not default Program Files dirs to avoid spaces in its path)
* download and install Python 2.7, add it to PATH
* if you're on windows 7 or Vista, install .net framework 4.5.1
* install Node 6 (because it's easier to make work with gyp & fibers)
* `nvm install 6.0.0` # or `nvm install 6.0.0 32` if you're on 32bit windows  
* `nvm use 6.0.0` # or `nvm use 6.0.0 32` if you're on 32bit windows  
* git clone the project # I couldn't make cookiecutter work on Windows yet
* put this instead of existing `setup` script of the project's package.json:  
```
    "setup": "npm install",
```
* `cd BootstrappedIronMan`
Then you can use usual dev commands like `gradle setup` and `npm run dev`, including browsersync support.
