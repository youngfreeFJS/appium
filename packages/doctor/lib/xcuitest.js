import {
  OSXVersionCheck,
  XcodeCheck,
  XcodeCmdLineToolsCheck,
  DevToolsSecurityCheck,
  OptionalLyftCommandCheck,
  OptionalIdbCommandCheck,
  OptionalApplesimutilsCommandCheck,
  OptionalIOSDeployCommandCheck,
  OptionalXcprettyCommandCheck,
} from './ios';
import EnvVarAndPathCheck from './env';

// Appium XCUITest Driver Requirements, link: https://appium.github.io/appium-xcuitest-driver/4.19/setup/

/**
 * @type {import('./factory').DoctorCheckList}
 */
let checks = [];

// Required.
checks.push(new EnvVarAndPathCheck('HOME'));
checks.push(new OSXVersionCheck('10.11'));

checks.push(new XcodeCheck());
checks.push(new XcodeCmdLineToolsCheck());

checks.push(new DevToolsSecurityCheck());

// Optional.
checks.push(new OptionalLyftCommandCheck());
checks.push(new OptionalIdbCommandCheck());
checks.push(new OptionalApplesimutilsCommandCheck());
checks.push(new OptionalIOSDeployCommandCheck());
checks.push(new OptionalXcprettyCommandCheck());

// TODO add go-ios, tidevice, wix appleSimUtils, py-ios-devices optional dep.
export default checks;
