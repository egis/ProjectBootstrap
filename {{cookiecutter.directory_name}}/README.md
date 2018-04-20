# {{cookiecutter.name}}

## Dev env & UAT

### Deployment
First install node 8.10.0+, yarn 1.5.1+ and gradle 2.7.
Then use these steps to deploy to your PT instance:
```
npm run basic-install
gradle setup
gradle jar
gradle upgrade
gradle install
pt deploy build/distributions/*-install.zip
pt deploy build/distributions/*-upgrade.zip
```
