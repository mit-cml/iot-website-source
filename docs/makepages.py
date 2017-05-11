#!env python
import os
import shutil
import sys

appRoutesHeader = '''
import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './Master';
import Home from './Home';
'''

appRoutesChunk = '''
import %(page)sPage from './tmp/%(page)s/Page';
'''

appRoutesFooter = '''
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
      <Route path="tutorials" component={TeacherTutorialPage} />
      <Route path="howtos" component={TeacherHowTosPage} />
      <Route path="exemplars" component={TeacherExemplarsPage} />
      <Route path="curriculum" component={TeacherCurriculumPage} />
    </Route>
    <Route path="students">
      <Route path="intro" component={StudentIntroPage} />
      <Route path="tutorials" component={StudentTutorialPage} />
      <Route path="howtos" component={StudentHowTosPage} />
      <Route path="exemplars" component={StudentExemplarsPage} />
    </Route>
    <Route path="makers">
      <Route path="intro" component={MakerIntroPage} />
      <Route path="tutorials" component={MakerTutorialPage} />
      <Route path="howtos" component={MakerHowTosPage} />
      <Route path="exemplars" component={MakerExemplarsPage} />
    </Route>
    <Route path="extensions">
      <Route path="intro" component={ExtensionsIntroPage} />
    </Route>
    <Route path="resources">
      <Route path="intro" component={ResourceIntroPage} />
    </Route>
    <Route path="documentation">
      <Route path="bluetoothle" component={BluetoothLEPage} />
      <Route path="microbit" component={MicroBitPage} />
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
      <Route path="arduino101" component={Arduino101Page} />
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
  </Route>
);

export default AppRoutes;
'''


pageTemplate = '''
import React from 'react';
import Title from 'react-title-component';
import MarkdownElement from '../../MarkdownElement';
import %(page)sText from './%(page)s.md';

const %(page)sPage = () => (
  <div>
    <Title render={(previousTitle) => `Internet of Things - ${previousTitle}`} />
    <MarkdownElement text={%(page)sText} />
  </div>
);

export default %(page)sPage;
'''

workDir = os.path.dirname(os.path.realpath(__file__))

def processPage(filename):
    f = open('%s/src/app/pages/%s' % (workDir, filename))
    rootname = filename.split('.')[0]
    ext = filename.split('.')[1]
    if ext != 'md':
        return                  # Not a Markdown file, skip it
    lines = f.readlines()
    f.close()
    # header = lines[0]
    rest = lines
    # rest = lines[1:]
    # if header[0] != '%':
    #     print '%s: No Magic, skipping' % filename
    #     return                  # This markdown file is not ready
    # path = header[1:]
    ## Make sure the directory is created
    try:
        os.makedirs('%s/src/app/tmp/%s' % (workDir, rootname))
    except OSError:
        pass                 # We get here if the directory already exists
    ## Create the .md file without the header
    f = open('%s/src/app/tmp/%s/%s.md' % (workDir, rootname, rootname), 'w')
    for line in rest:
        f.write(line)
    f.close()
    ## Create Pages.js
    f = open('%s/src/app/tmp/%s/Page.js' % (workDir, rootname), 'w')
    f.write(pageTemplate % { 'dirname' : workDir,
                             'page' :  rootname,
                             'previous' : 'TEMP FOR NOW'})
    f.close()
    return appRoutesChunk % { 'page' : rootname}

def main():
    import re
    M = re.compile('.*\.md$')
    shutil.rmtree('%s/src/app/tmp' % workDir, True)
    pages = os.listdir('src/app/pages')
    pages = filter(M.match, pages) # Get rid of backup files, only MD files please
    chunks = []
    for page in pages:
        print 'Processing %s' % page
        chunk = processPage(page)
        if chunk:               # Only add it if it isn't None
            chunks.append(chunk)
    f = open('src/app/AppRoutes.js', 'w')
    f.write(appRoutesHeader)
    for chunk in chunks:
        f.write(chunk)
    f.write(appRoutesFooter)
    f.close()

if __name__ == '__main__':
    main()

