// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDfTH4QT7DWPVwYWOjqsHo7THd7qoteypo',
    authDomain: 'inventorytool-cf6ec.firebaseapp.com',
    databaseURL: 'https://inventorytool-cf6ec.firebaseio.com',
    projectId: 'inventorytool-cf6ec',
    storageBucket: 'inventorytool-cf6ec.appspot.com',
    messagingSenderId: '388045465532'
  }
};
