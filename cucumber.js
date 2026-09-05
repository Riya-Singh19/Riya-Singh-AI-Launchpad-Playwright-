//for cucumber to understand when the files will run
module.exports = {
default: {
require: [
'features/stepDefinitions/*.ts',
'hooks/*.ts'
],

requireModule: [
'ts-node/register'
],



format: [
'progress',
'json:reports/cucumber-report.json',
'html:reports/cucumber-report.html'
],
//this is the format of the report that will be generated after the execution of the test cases
//parallel: 3
}
};
