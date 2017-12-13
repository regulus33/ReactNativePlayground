# t a s k m a n

A mobile app that aims to eliminiate the all or nothing attitude about task completion, productivity and developing healthy habits.

## This app solves this problem in x ways

* Gives users credit for partially completed tasks, tasks, habits etc. which are based on a sliding scale grading system
* Alerts users with motivational quotes on mindfulness and persistence.


### I will build with these long term goals in mind:
* * Uses the React Native gaming engine to tap into users' award systems, making real life task completion like real life task completion
* * Mirrors a social media app, encouraging users to share their achievements, create honor systems and collaborate on big projects.


I want this app to change lives...

Open source? TBD

### Setup for development:

Run ```npm install```

since this is Android first, open android studio and select tools >> Android >> AVD manager >> select existing or create new device (basically run an instance of the emulator)

OR

to run on your actual phone, after enabling developer options, go to developer options and make sure enable usb debugging is selected, then plug your phone in via usb. Authorize your dev machine to connect.

then run

``` react-native run-android ```

or


``` react-native run-ios ```


```open dev options on android with command + m```

## esling config

```npm install --save-dev eslint-config-rallycoding```

then create a .eslintrc file in your root directory of the project,
add this code:

```
{
  "extends" : "rallycoding"
}
```

close sublime then reopen