
import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './Master';
import Home from './Home';

import Arduino101AccelerometerPage from './tmp/Arduino101Accelerometer/Page';

import Arduino101ButtonPage from './tmp/Arduino101Button/Page';

import Arduino101GyroscopePage from './tmp/Arduino101Gyroscope/Page';

import Arduino101HumidityPage from './tmp/Arduino101Humidity/Page';

import Arduino101IntroPage from './tmp/Arduino101Intro/Page';

import Arduino101LedPage from './tmp/Arduino101Led/Page';

import Arduino101LightSensorPage from './tmp/Arduino101LightSensor/Page';

import Arduino101MoisturePage from './tmp/Arduino101Moisture/Page';

import Arduino101PinsPage from './tmp/Arduino101Pins/Page';

import Arduino101ProximitySensorPage from './tmp/Arduino101ProximitySensor/Page';

import Arduino101PWMMotorPage from './tmp/Arduino101PWMMotor/Page';

import Arduino101RgbLcdPage from './tmp/Arduino101RgbLcd/Page';

import Arduino101ServoPage from './tmp/Arduino101Servo/Page';

import Arduino101SoundRecorderPage from './tmp/Arduino101SoundRecorder/Page';

import BluetoothLEIntroPage from './tmp/BluetoothLEIntro/Page';

import DevicesIntroPage from './tmp/DevicesIntro/Page';

import ExtensionsIntroPage from './tmp/ExtensionsIntro/Page';

import FAQPage from './tmp/FAQ/Page';

import ForumPage from './tmp/Forum/Page';

import GetStartedIntroPage from './tmp/GetStartedIntro/Page';

import HelpIntroPage from './tmp/HelpIntro/Page';

import MakerExamplesPage from './tmp/MakerExamples/Page';

import MakerHowTosPage from './tmp/MakerHowTos/Page';

import MakerIntroPage from './tmp/MakerIntro/Page';

import MakerTutorialsPage from './tmp/MakerTutorials/Page';

import MicroBitAccelerometerPage from './tmp/MicroBitAccelerometer/Page';

import MicroBitButtonPage from './tmp/MicroBitButton/Page';

import MicroBitDeviceInformationPage from './tmp/MicroBitDeviceInformation/Page';

import MicroBitDfuControlPage from './tmp/MicroBitDfuControl/Page';

import MicroBitEventPage from './tmp/MicroBitEvent/Page';

import MicroBitGeneBicAttributePage from './tmp/MicroBitGeneBicAttribute/Page';

import MicroBitGenericAccessPage from './tmp/MicroBitGenericAccess/Page';

import MicroBitGenericAttributePage from './tmp/MicroBitGenericAttribute/Page';

import MicroBitIntroPage from './tmp/MicroBitIntro/Page';

import MicroBitIoPinPage from './tmp/MicroBitIoPin/Page';

import MicroBitLedPage from './tmp/MicroBitLed/Page';

import MicroBitMagnetometerPage from './tmp/MicroBitMagnetometer/Page';

import MicroBitTemperaturePage from './tmp/MicroBitTemperature/Page';

import MicroBitUartPage from './tmp/MicroBitUart/Page';

import StudentExamplesPage from './tmp/StudentExamples/Page';

import StudentHowTosPage from './tmp/StudentHowTos/Page';

import StudentIntroPage from './tmp/StudentIntro/Page';

import StudentTutorialsPage from './tmp/StudentTutorials/Page';

import TeacherCurriculumPage from './tmp/TeacherCurriculum/Page';

import TeacherExamplesPage from './tmp/TeacherExamples/Page';

import TeacherHowTosPage from './tmp/TeacherHowTos/Page';

import TeacherIntroPage from './tmp/TeacherIntro/Page';

import TeacherTutorialsPage from './tmp/TeacherTutorials/Page';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="teachers">
      <Route path="intro" component={TeacherIntroPage} />
      <Route path="tutorials" component={TeacherTutorialsPage} />
      <Route path="howtos" component={TeacherHowTosPage} />
      <Route path="examples" component={TeacherExamplesPage} />
      <Route path="curriculum" component={TeacherCurriculumPage} />
    </Route>
    <Route path="students">
      <Route path="intro" component={StudentIntroPage} />
      <Route path="tutorials" component={StudentTutorialsPage} />
      <Route path="howtos" component={StudentHowTosPage} />
      <Route path="examples" component={StudentExamplesPage} />
    </Route>
    <Route path="makers">
      <Route path="intro" component={MakerIntroPage} />
      <Route path="tutorials" component={MakerTutorialsPage} />
      <Route path="howtos" component={MakerHowTosPage} />
    </Route>
    <Route path="getstarted">
      <Route path="intro" component={GetStartedIntroPage} />
    </Route>
    <Route path="help">
      <Route path="intro" component={HelpIntroPage} />
    </Route>
    <Route path="devices">
      <Route path="intro" component={DevicesIntroPage} />
    </Route>
    <Route path="bluetoothle">
      <Route path="bluetoothleintro" component={BluetoothLEIntroPage} />
    </Route>
    <Route path="microbit">
      <Route path="microbitintro" component={MicroBitIntroPage} />
      <Route path="microbitaccelerometer" component={MicroBitAccelerometerPage} />
      <Route path="microbitbutton" component={MicroBitButtonPage} />
      <Route path="microbitdeviceinformation" component={MicroBitDeviceInformationPage} />
      <Route path="microbitdfucontrol" component={MicroBitDfuControlPage} />
      <Route path="microbitevent" component={MicroBitEventPage} />
      <Route path="microbitgenericaccess" component={MicroBitGenericAccessPage} />
      <Route path="microbitgenericattribute" component={MicroBitGenericAttributePage} />
      <Route path="microbitiopin" component={MicroBitIoPinPage} />
      <Route path="microbitled" component={MicroBitLedPage} />
      <Route path="microbitmagnetometer" component={MicroBitMagnetometerPage} />
      <Route path="microbittemperature" component={MicroBitTemperaturePage} />
      <Route path="microbituart" component={MicroBitUartPage} />
    </Route>
    <Route path="arduino101">
      <Route path="arduino101intro" component={Arduino101IntroPage} />
      <Route path="arduinoaccelerometer" component={Arduino101AccelerometerPage} />
      <Route path="arduinobutton" component={Arduino101ButtonPage} />
      <Route path="arduinogyroscope" component={Arduino101GyroscopePage} />
      <Route path="arduinohumidity" component={Arduino101HumidityPage} />
      <Route path="arduinoled" component={Arduino101LedPage} />
      <Route path="arduinolightsensor" component={Arduino101LightSensorPage} />
      <Route path="arduinomoisture" component={Arduino101MoisturePage} />
      <Route path="arduinopins" component={Arduino101PinsPage} />
      <Route path="arduinoproximitysensor" component={Arduino101ProximitySensorPage} />
      <Route path="arduinopwm" component={Arduino101PWMMotorPage} />
      <Route path="arduinorgblcd" component={Arduino101RgbLcdPage} />
      <Route path="arduinoservo" component={Arduino101ServoPage} />
      <Route path="arduinosoundrecorder" component={Arduino101SoundRecorderPage} />
    </Route>
    <Route path="faq">
      <Route path="faq" component={FAQPage} />
    </Route>
    <Route path="forum">
      <Route path="forum" component={ForumPage} />
    </Route>
  </Route>
);

export default AppRoutes;
