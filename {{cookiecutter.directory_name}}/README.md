# {{cookiecutter.name}}

## Dev env & UAT

### Deployment
First install node 8.10.0+, yarn 1.5.1+ and gradle 2.7.
Then use these steps to deploy to your PT instance:
```
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
* in one terminal window run `cd {{cookiecutter.name}} && npm run dev`
* in another terminal window run `cd build-tools && npm run browsersync -- --plugin={{cookiecutter.name}}`

Normal standalone `npm run dev` dev env works too.