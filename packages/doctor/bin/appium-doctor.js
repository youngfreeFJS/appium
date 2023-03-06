// transpile:main

import yargs from 'yargs';
import newDoctor from '../lib/factory';
import {configureBinaryLog, supportedDrivers} from '../lib/utils';
import {configure as configurePrompt} from '../lib/prompt';
import {system} from '@appium/support';

yargs
  .strict()
  .usage('Usage: $0 [options, defaults: --ios --android]')
  .string('driver')
  .describe('driver', 'Check driver setup')
  .boolean('ios')
  .describe('ios', 'Check iOS setup')
  .boolean('android')
  .describe('android', 'Check Android setup')
  .boolean('dev')
  .describe('dev', 'Check dev setup')
  .boolean('debug')
  .describe('debug', 'Show debug messages')
  .boolean('yes')
  .describe('yes', 'Always respond yes')
  .boolean('no')
  .describe('no', 'Always respond no')
  .boolean('demo')
  .describe('demo', 'Run appium-doctor demo (for dev1).')
  .help('h')
  .alias('h', 'help')
  .check(function (argv) {
    if (!argv.ios && !argv.android && !argv.demo && !argv.driver) {
      argv.ios = system.isMac();
      argv.android = true;
    }
    if (!supportedDrivers.includes(argv.driver)) {
      throw new Error(
        `Could not resolve driver: ${argv.driver}. are you sure it's in the list of supported drivers? ${supportedDrivers}`
      );
    }
    return true;
  });

// make sure we use the general checks for every test
let opts = Object.assign(
  {
    general: true,
  },
  yargs.argv
);

configurePrompt(opts);
configureBinaryLog(opts);
newDoctor(opts)
  .run()
  .catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
