# ES6 JS example for govcon 2018

This project contains a custom weather module, demonstrating some es6 language
features, as well as how to set up a module or theme to take advantage of ES6 js
modules. See the example module at
`docroot/modules/custom/weather_widget_example`

Before getting started, please note that you'll **need to provide your own (free)
api key** for the geolocation service used by the weather module! Head over to
ipstack.com to get an api key, then search and replace the `<insert_key_here>`
placeholder in
`docroot/modules/custom/weather_widget_example/js/modules/WeatherWidget.js`

Feel free to use the *Getting Started* instructions below to set up a simple
demo site, or copy the `weather_widget_example` module to your own project. 

Note: if you're copying the example module to your own project, be sure to run
`gulp` to generate its assets.

## Getting Started

This project is based on BLT, an open-source project template and tool that enables building, testing, and deploying Drupal installations following Acquia Professional Services best practices. While this is one of many methodologies, it is our recommended methodology. 

* Review the [Required / Recommended Skills](http://blt.readthedocs.io/en/latest/readme/skills) for working with a BLT project
* Ensure that your computer meets the minimum installation requirements (and then install the required applications). See the [System Requirements](http://blt.readthedocs.io/en/latest/INSTALL/#system-requirements).
* Request access to organization that owns the project repo in GitHub (if needed)
* Fork the project repository in GitHub
* Request access to the Acquia Cloud Environment for your project (if needed)
* Setup a SSH key that can be used for GitHub and the Acquia Cloud (you CAN use the same key)
    * [Setup GitHub SSH Keys](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
    * [Setup Acquia Cloud SSH Keys](https://docs.acquia.com/acquia-cloud/ssh/generate)
* Clone your forked repository. By default, Git names this "origin" on your local.
```
$ git clone git@github.com:<account>/weather-module-example.git
```
* To ensure that upstream changes to the parent repository may be tracked, add the upstream locally as well.
```
$ git remote add upstream git@github.com:darkcody/weather-module-example.git
```
* Install Composer Dependencies (warning: this can take some time based on internet speeds)
```
$ composer install
```
* Setup Local Environment 

BLT requires "some sort" of local environment that implements a LAMP stack. While we provide out of the box templates for Drupal VM, if you prefer you can use another tool such as Docker, Docksal, Lando, (other) Vagrant, or your own custom LAMP stack. BLT works with any local environment, however support is limited for these solutions.

For instructions on setting up Drupal VM, (read our documentation here)[http://blt.readthedocs.io/en/9.x/readme/local-development/#using-drupal-vm-for-blt-generated-projects].

* Run the initial Setup
```
$ vagrant ssh
$ blt setup
``` 
* Access the site and do necessary work at \http://local.weather-widget-example.com/ by running

```
$ drush uli
```

Additional [BLT documentation](http://blt.readthedocs.io) may be useful. You may also access a list of BLT commands by running:
```
$ blt
``` 

Note the following properties of this project:
* Local environment: \local
* Local site URL: \http://local.weather-widget-example.com/

## Working With a BLT Project

BLT projects are designed to instill software development best practices (including git workflows). 

Our BLT Developer documentation includes an (example workflow)[http://blt.readthedocs.io/en/latest/readme/dev-workflow/#workflow-example-local-development].

### Important Configuration Files

BLT uses a number of configuration (.yml or .json) files to define and customize behaviors. Some examples of these are:

* blt/blt.yml (formerly blt/project.yml prior to BLT 9.x)
* blt/local.blt.yml
* box/config.yml (if using Drupal VM)
* drush/sites (contains Drush aliases for this project)
* composer.json (includes required components, including Drupal Modules, for this project)
