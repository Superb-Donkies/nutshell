module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      watch: {
          scripts: {
              files: ["../index.html", "../js/**/*.js", "../css/**/*.css", "!node_modules/**/*.js"],
              tasks: ["eslint", "browserify"],
              options: {
                  spawn: false,
              },
          }
      },
      browserify: {
          options: {
              browserifyOptions: {
                  debug: true,
                  paths: ["../js"],
              }
          },
          dist: {
              files: {
                  "../../dist/app.js": ["../js/main.js"]
              }
          }
      },
      eslint: {
          src: ["../js/**/*.js", "!node_modules/**/*.js"]
      },
      copy: {
          main: {
              files: [{
                  expand: true,
                  cwd: "..",
                  src: "./css/*",
                  dest: "../../dist/"
              }, {
                  expand: true,
                  cwd: "..",
                  src: "./index.html",
                  dest: "../../dist/"
              }]
          }
      }
  });
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.registerTask("default", ["eslint", "browserify", "copy", "watch"]);
};
