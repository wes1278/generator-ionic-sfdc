'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var GulpNgGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('This generator will generate a web app project using gulp, bower and angularjs.'));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.copy('app/_app.css', 'app/styles/main.css');
    this.copy('app/_app.js','app/scripts/main.js');
    // this.copy('app/_app_controller.js','app/app_controller.js');
    // this.copy('app/_app_controller_test.js','app/app_controller_test.js');
    this.copy('app/_index.html','app/index.html');
    this.copy('_gitignore','.gitignore');

    // this.mkdir('app/components');
    // this.copy('app/components/_app_service.js', 'app/components/app_service.js');
    // this.copy('app/components/_app_service_test.js', 'app/components/app_service_test.js');

    // this.mkdir('app/main');
    this.copy('app/main/_main.html', 'app/views/main.html');
    // this.copy('app/main/_main_controller.js', 'app/views/main_controller.js');
    // this.copy('app/main/_main_controller_test.js', 'app/views/main_controller_test.js');
  },

  projectfiles: function () {
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_bower.json', 'bower.json');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_karma-unit.js', 'karma-unit.js');
  }
});

module.exports = GulpNgGenerator;
