# Sprout Pomodoro

* A simple pomodoro timer that rewards the user by showing a flourishing plant grow!

* Start timer - seed planted
* Start break 1 - water the ground
* Start timer 2 - sprout appears!
* Start break 2 - water the sprout
* Start timer 3 - more leaves! sparkles! You did it for an hour!
* After this, breaks simply have the add water image

* Let's see how annoying it is to create these images and animations before committing to more than 3 stages but it would be cool to have a bud grow into a flower or a neat bug come by or some additional things

### Colours:
* background comforting brown like dirt? blue like sky?
* comforting browns: 5E3D2F, 3D261D (darker)
* opposing greens for plant: 142A21, 13392A, 204033, 2D5746 (dark to light)
* nice blue for sky: #B2E0EB, #D3EBF3 (properly light for black text), 217285, 288297 (dark and moody)

### Nov 9
* Started the project, picked colours, researched options for making the little plant svgs, started to mock out the layout and play around with tailwind

### Nov 10
* Sprout needs to know plant stage
* Plant stage determined by: break or work, previous stage
* Plant state should not change when repeating the same state twice or if the timer is changed without completing
* Create several simple images in inkscape
* Create sprout component to handle which image should appear