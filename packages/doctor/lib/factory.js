import _ from 'lodash';
import {Doctor} from './doctor';
import generalChecks from './general';
import iosChecks from './ios';
import androidChecks from './android';
import devChecks from './dev';
import demoChecks from './demo';
import xcuitestChecks from './xcuitest';
import uiautomator2Checks from './uiautomator2';
import mac2Checks from './mac2';

/**
 * @type {DoctorGroup}
 */
let checks = {
  generalChecks,
  iosChecks,
  androidChecks,
  devChecks,
  demoChecks,
  xcuitestChecks,
  uiautomator2Checks,
  mac2Checks,
};

let newDoctor = (opts) => {
  let doctor = new Doctor();
  for (let [k, v] of _.toPairs(opts)) {
    if (v) {
      doctor.register(checks[`${k}Checks`] || []);
    }
    if (k === 'driver') {
      doctor.register(checks[`${v}Checks`] || []);
    }
  }
  return doctor;
};

export default newDoctor;

/**
 * @typedef {import('./doctor').DoctorCheck[]} DoctorCheckList
 */

/**
 * @typedef DoctorGroup - Contain a group of Doctors
 * @property {DoctorCheckList} generalChecks - Check AppiumHome, NodeBinary, NodeVersion, ffmpeg, mjpeg-consumer
 * @property {DoctorCheckList} iosChecks - Check if iOS toolchains are installed
 * @property {DoctorCheckList} androidChecks - Check if Android toolchains are installed
 * @property {DoctorCheckList} devChecks - Check Path Binary and Android SDKs
 * @property {DoctorCheckList} demoChecks - Check /tmp/appium-doctor/demo/*
 */
