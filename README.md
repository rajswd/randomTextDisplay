# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Regarding App

There is routing implemenation in this app. There is two page: Home and Crud
## Home
    1. Wrap the textarea (and/or input) + submit inside an Angular Reactive Form. Show some usage of reactive features of said form (maybe a letter counter outside the box or any sort of validation).
    2. Create a second input which expects a URL, loads the content (comes as JSON). You should use the "description" property of the response, (see https://random-data-api.com/api/restaurant/random_restaurant as a sample of data) and then counts the words within the text. Use Angular's Http service, do not transform the observable into a promise.
    3. Once you have top 10 most used words in the body of text, display them in a tabular fashion (divs or table) along with the count of word occurrences. The loading, logc should not be conducted in the component, but by creating a Injectable to handle the business logic. Then use dependency injection in the components accordingly.

## Curd Applications
    URL: http://localhost:4200/curd
    - Perform api interaction(GET and POST) with local api(i.e. Java spring boot api).
    - The Java spring boot application is hosted here: https://github.com/rajswd/raj-first-app
