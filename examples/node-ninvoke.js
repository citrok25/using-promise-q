var fs = require("fs");
var Q = require("q");

var filename = "00readme.md";
var encoding = "utf-8";

Q.ninvoke(fs, "readFile", filename, encoding).then(console.log);
