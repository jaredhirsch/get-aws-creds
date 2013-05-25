**get-aws-creds** from a config file, process.env, or EC2 metadata, in that order.

install
=======

    npm install get-aws-creds


use
===

#### via config file

    var getCreds = require("get-aws-creds");
    getCreds(myAwssumCallback, "./path/to/creds/json");

#### via process.env

Just set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION`.

    var getCreds = require("get-aws-creds");
    getCreds(myAwssumCallback);

#### via EC2 instance meta-data

Nothing to do! `get-aws-creds` uses `get-iam-creds` to fetch the region and secrets from instance metadata.

    var getCreds = require("get-aws-creds");
    getCreds(myAwssumCallback);


license
=======

Apache 2, because non-copyleft + patent protecting.
