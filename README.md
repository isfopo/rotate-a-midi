# Acceleration to MIDI

### Description

A paired phone app (made with React Native) and M4L Device or plugin that will transfer MIDI CC data based off of the mobile device's rotation via OSC to be used to control parameters in your DAW.

### Platforms 
 - React Native for phone app
 - Max for Live for Live Device
 - JUCE for VST/AU plugin (if I'm feeling ambitious)

### Features
 - 1D (x, y or z), 2D (x and y, y and z, or z and x) and 3D (x, y and z) options 
   - do this by enabling or disabling the axis from app
 - for midi assignment in Ableton, must have the option to "Solo" a data stream
   - could also be done with enable/disable
 - visual feedback on both the phone app and device
   - should mirror each other
   - should be minimal and any other settings hidden until needed
   - display should be set to "always on"
 - provide a way to easily setup an OSC to both devices

### Milestones

##### Phase 1
 - [ ] create phone app that can track device's rotation
 - [ ] think of better name

##### Phase 2
 - [ ] create M4L device that:
   - [ ] has three knobs
   - [ ] can send midi data to Ableton globally

##### Phase 3
 - [ ] establish OSC link between app and device

##### Phase 4
 - [ ] create UI that is consistent between app and 

##### Phase 5
 - [ ] create settings tab for app that includes:
   - [ ] easy OSC setup/pairing
   - [ ] axis enable/disable

##### Phase 6
 - [ ] create settings tab for device that includes:
   - [ ] easy OSC setup/pairing

##### Phase 7
 - [ ] clean up UI

##### Phase 8
 - [ ] make VST/AU plugin to use in place of M4L device

##### Phase 9
 - [ ] package and publish