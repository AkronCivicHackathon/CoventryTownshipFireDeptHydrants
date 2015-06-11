# CoventryTownshipFireDeptHydrants

Repository for Coventry Township Fire Departments Hydrants mapping. All source files and data files will be added as they are available.


## Development

The project uses [Node/NPM](https://nodejs.org/), [Bower](http://bower.io/), and
[Grunt](http://gruntjs.com/) for compiling the web files. Check their websites
for installation instructions, then install the project dependencies with:

```bash
npm install
bower install
apt-get install ruby-full
gem install sass
npm install grunt-cli grunt-browser-sync grunt-contrib-clean grunt-contrib-copy grunt-contrib-sass grunt-contrib-watch normalize.css
bower install leaflet.markercluster #as a non-root user
grunt dist
```

You can now run a local webserver that hosts the application by running `grunt`.


## Production

You can build a production version of the application by running `grunt dist`.
It will pull all of the files in the `public/` directory, which can be deployed to a simple webserver.
