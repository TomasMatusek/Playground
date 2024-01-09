"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const fs = require("fs");

module.exports = class extends Generator {
  initializing() {
    this.log("Initializing...");
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "className",
        message: "Enter domain object name? E.g.: User, Product",
        default: "Product"
      },
      {
        type: "input",
        name: "classVariablesList",
        message:
          "Enter a comma-separated list of variables: E.g.: int id, String name, String address",
        default: "int id, String name"
      }
    ]).then(answers => {
      this.answers = answers;
      this.answers.packageName = answers.className.toLowerCase();
      this.answers.classVariables = answers.classVariablesList.split(",");
    });

    this.log("Domain class name: ", `${chalk.green(this.answers.className)}`);
    this.log(
      "Variables list",
      `${chalk.green(this.answers.classVariablesList)}`
    );
  }

  writing() {
    this.createSharedObjects();
  }

  end() {
    this.log("End...");
  }

  createSharedObjects() {
    const root = process.cwd();
    const path = `${root}/datacollector-client/src/main/java/com/soonr/datacollector/graphql/shared/${this.answers.packageName}`;

    this.log("Root: ", `${chalk.blue(root)}`);
    this.log("Path: ", `${chalk.blue(path)}`);

    fs.mkdir(path, { recursive: false }, err => {
      if (err) this.log(err.errno ? err.errno : err);
    });
  }
};
