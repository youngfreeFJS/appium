import {AndroidToolCheck, JavaOnPathCheck} from './android';
import EnvVarAndPathCheck from './env';

// Appium espresso Driver Requirements, link: https://github.com/appium/appium-espresso-driver#requirements

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

export default checks;
