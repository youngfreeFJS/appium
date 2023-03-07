import {
  AndroidToolCheck,
  JavaOnPathCheck,
  OptionalAppBundleCheck,
  OptionalGstreamerCheck,
} from './android';
import EnvVarAndPathCheck from './env';

// Appium uiautomator2 Driver Requirements, link: https://github.com/appium/appium-uiautomator2-driver#requirements

/**
 * @type {import('./factory').DoctorCheckList}
 */
let checks = [];

// Required.
checks.push(new EnvVarAndPathCheck('ANDROID_HOME'));
checks.push(new EnvVarAndPathCheck('ANDROID_SDK_ROOT'));
checks.push(new EnvVarAndPathCheck('JAVA_HOME'));

checks.push(new AndroidToolCheck());
checks.push(new JavaOnPathCheck());

// Optional.
checks.push(new OptionalAppBundleCheck());
checks.push(new OptionalGstreamerCheck());

export default checks;
