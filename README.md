# Nnodes project
---

### Using this project

Make sure you have the following programs installed:

- nodejs
- npm
- bower
- gulp

Next, install Ionic Framework:

`sudo npm install -g cordova ionic`

You can now download the repository and build the necessary files:
```
npm install
bower install
ionic state restore
ionic resources
ionic setup sass
```
You are now ready to run the app locally:

`ionic serve --lab`

or directly into the device:

- Android: `ionic run android`
- iOS: Run from XCode or `ionic run ios`

To run the app into Android, you need to have Android SDK and Java SDK installed.

### Installation in Ubuntu
Execute on the terminal the following:
```
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install bower -g
sudo npm install -g gulp
sudo npm install -g cordova ionic
npm install
bower install
ionic state restore
ionic resources
ionic setup sass
```
To run directly on android device:

##### Java JDK
sudo apt-get install default-jdk

##### Android SDK
1. Download tools from developer.android.com/studio
2. Create android-sdk directory and put extracted folder (tools) inside
3. Update bashrc with:
```
export ANDROID_HOME=/path_of_your_choosing/android-sdk
export PATH=${PATH}:$ANDROID_HOME/tools
```
4. Enter tools folder in the terminal and run ./android
5. Install everything in Tools, Extras and the platform of your choosing


---
Desarrollado por [**_Nnodes_**](http://nnodes.com/)
