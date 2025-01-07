# Call Simulation App

![React Native](https://img.shields.io/badge/React%20Native-0.64-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Project Overview

This React Native application simulates an audio and video call interface with features like contact selection, call initiation, switching between audio and video calls, and in-call controls. It provides a functional demonstration of calling interactions within a mobile app environment.

## Features

### Contact List
- Displays a list of contacts with names and numbers.
- Provides call and video call buttons for each contact.

### Incoming Call Simulation
- Automatically simulates an incoming call 2 seconds after launching the app.

### Audio and Video Call Modes
- Switch between audio and video calls.
- Access the device’s camera during video calls.

### In-Call Controls
- Mute/unmute the microphone.
- Switch between front and back cameras.
- End the call.

### Calling UI
- Displays caller's name and avatar during the call.
- "Calling..." indicator during call setup.

## Installation and Setup

Clone the repository:
```bash
git clone https://github.com/shubhanshubb/CallSimulationApp.git
cd CallSimulationApp

Install dependencies:

npm install

Link required native dependencies:

npx react-native link react-native-vision-camera
npx react-native link react-native-sound

Run the app:

For iOS:

npx react-native run-ios

For Android:

npx react-native run-android

How to Use
View Contacts
Launch the app to see a list of pre-defined contacts.
Simulated Incoming Call
Wait for 2 seconds to see a modal simulating an incoming call.
Accept or reject the call.
Audio and Video Calls
Tap the phone icon for an audio call or the video icon for a video call.
In-Call Controls
Mute/unmute using the microphone icon.
Switch cameras using the switch camera icon.
End the call using the end call icon.
File Structure
App.js: Entry point of the application, sets up navigation.
AppNavigator.js: Handles navigation between screens (Home and Call).
Home.js: Displays the contact list and handles incoming call simulation.
Call.js: Manages the call interface, including video rendering and in-call controls.
constants/SingleTextAvatar.js: Utility for rendering user avatars.

Dependencies
Navigation: @react-navigation/native, @react-navigation/stack
Icons: react-native-vector-icons
Camera: react-native-vision-camera
Sound: react-native-sound
Technical Details
State Management
useState is used to manage states like callType, isMuted, and modal visibility.
useEffect is utilized for lifecycle events such as playing ringtones and requesting camera permissions.
Permissions
Camera permissions are requested dynamically using react-native-vision-camera.
UI Components
Contact List: Rendered using FlatList.
Modal: Displays incoming call simulation.
Camera: Integrated using react-native-vision-camera.
Demo
Include a link or embed a video showing the app in action.

Future Improvements
Enhancements
Add real-time calling functionality using WebRTC.
Include animations for transitions and in-call events.
Features
Integrate a backend for managing contacts and call history.
Add support for dynamic avatars and profile pictures.
Author
This project is developed by Shubhanshu Barnwal. For further queries, feel free to reach out via Contact:

<img alt="Email" src="https://img.shields.io/badge/-Email-D14836?logo=gmail&amp;logoColor=white">