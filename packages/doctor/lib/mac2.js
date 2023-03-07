import {OSXVersionCheck, XcodeCheck, XcodeCmdLineToolsCheck, XCodeVersionCheck} from './ios';
import EnvVarAndPathCheck from './env';

// Appium Mac2 Driver Requirements, link: https://github.com/appium/appium-mac2-driver#requirements

/**
 * @type {import('./factory').DoctorCheckList}
 */
let checks = [];

// Required.
checks.push(new EnvVarAndPathCheck('HOME'));
checks.push(new OSXVersionCheck('10.15'));

checks.push(new XcodeCheck());
checks.push(new XcodeCmdLineToolsCheck());
checks.push(new XCodeVersionCheck('9'));

// Optional.

// TODO add go-ios, tidevice, wix appleSimUtils, py-ios-devices optional dep.
export default checks;
