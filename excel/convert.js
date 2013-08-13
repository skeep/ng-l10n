(function () {
  'use strict';

  var fs, parseXlsx, _;

  parseXlsx = require("excel");

  _ = require("lodash");

  fs = require("fs");

  parseXlsx("language.xlsx", function (err, data) {
    var lang, local;
    if (err) {
      throw err;
    } else {
      lang = {};
      local = data[0].slice(1);
      _.each(data, function (d, i) {
        if (i > 0) {
          lang[d[0]] = {};
          return _.each(local, function (l, j) {
            return lang[d[0]][l] = d[j + 1];
          });
        }
      });
    }
    lang = JSON.stringify(lang);
    return fs.writeFile("language.json", lang, function (err) {
      if (err) {
        return console.log(err);
      }
      return console.log("File written");
    });
  });
}).call(this);

