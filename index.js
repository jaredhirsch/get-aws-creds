var getIamCreds = require('get-iam-creds');
var fs = require('fs');

// three ways to specify config values, in order of precedence:
// 1. fetch them out of a config file, see aws-creds.json.sample for the schema
// 2. fetch them out of env.
// 3. fetch them out of IAM using IMD
//
// specify config file by passing as optional second arg.
module.exports = function getAwsCreds(cb, configFile) {
  var configOptions = configFile && JSON.parse(fs.readFileSync(configFile));
  var hasEnv = process.env.AWS_SECRET_ACCESS_KEY &&
                process.env.AWS_ACCESS_KEY_ID && process.env.AWS_REGION;
  var envOptions = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  };

  configOptions ? cb(null, configOptions) :
    hasEnv ? cb(null, envOptions) : getIamCreds(cb);
}
// what about error handling when reading the config file?
// what about checking that the config file has the right values?
// what about checking that the env vars are set and nonempty?
