ng-l10n
=======

An angular module to implement i18n across angular application. Once it is implemented localization (l10n) should be just as easy as converting the excel to JSON.

I have also included a small tool to convert the excel file to proper JSON format.

The conversion process may also be automated by a grunt task. Below is the one that I use. It uses a grunt plugin called [grunt-shell](https://github.com/sindresorhus/grunt-shell)


```
shell: {
  copylang: {
    command: [
      'cd excel',
      'node convert.js',
      'cp language.json ../app/scripts/'
    ].join('&&')
  }
}
```

