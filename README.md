# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Nam Hoang**

Time spent: **8** hours spent in total

Link to project: (https://glitch.com/edit/#!/screeching-futuristic-clavicle?path=style.css%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![](https://i.imgur.com/TuqlTWB.gif)

![](https://i.imgur.com/mBkHeBL.gif)

![](https://i.imgur.com/aX4Cefd.gif)

![](https://i.imgur.com/imfLAjO.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I used the tutorials and links in the CodePath instructions and reference some information on the w3 website. ]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I learned a small portion of HTML and CSS before, so I felt comfortable following instructions in the beginning. However, I had some challenges when encountering the JavaScript code. First, it took me significant time to understand the logic behind each function and especially how they supported one another. The 'startGame()' and 'stopGame()' were quite straightforward, but when it came to 'playSingleClue()' and 'playClueSequence()', I didn't understand how they can be incorporated into the overall logic. Until I read the 'guess()' function, I'm slightly familiarized with how the game's state was maintained and the clue sequence was played. Reading through the codes multiple times helped me figure out the individual task of each function and how they were utilized to solve the problem. Therefore, I loved this experience as it taught me how to think when coding interactively with users' inputs. Second, interpreting the 'playTone()' function was quite an interesting challenge for me. It seemed like a black box at first when I reluctantly accepted that it simply played the sound. Nonetheless, the article in the tutorials helped. It explained comprehensively how to create sound using frequency and timer. This satisfied and motivated my learning progress. Finally, I had trouble implementing the optional features of decreasing the playing time for each round. I needed to search for the definition of global and local variables to declare the 'clueHoldTime' variable. Moreover, I had to reinforce my grasp on the code's flow again and found a suitable portion for the variable. Them, another problem occurred when the game didn't work as I expected. For that, I learned how to use the console log in the browser to debug the incorrect portion, which was a new lesson for me. In conclusion, this project placed a foundation on my web programming journey with exciting challenges and unforeseen problems.  

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Facing challenges encourages me to ask multiple questions as I follow along with the web development project. First, I'm pretty curious about how to practice with the CSS side. In the project, I'm provided with the codes to implement. Although I understand it, I wonder how would I come up with those codes from scratch. Does it have anything to do with the artistic side to decorate such websites? How can I arrange the HTML code in a way that makes my CSS implementation flexible and straightforward? More importantly, how can I practice those skills? For example, I often practiced my problem-solving skill on Leetcode by having my code return the correct answers on the given tests. However, in web development, how can I know if this website looks correct, beautiful, or user-friendly? On the other hand, I'm also curious about the whole process of web development. In this project, I implemented the code and uploaded it to GitHub. Thus, what does it feel like when various people work on a project? How everything is maintained, assigned, and evaluated? I think this is the most significant problem. Learning to code is amazing, and learning to work with other people fascinates me. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time, I would first play around with the four buttons' shapes. I would change those rectangular buttons into many more shapes of circles or squares. I would also try to modify the color to see the best fit. I think experimenting with the website's outline is quite interesting. Moreover, I would code more sophisticated sounds using the theory in the instruction article. Alongside the visual, I wanted to play with different sound combinations. I would transform the sound a little bit if the user presses the button for a long time. Or I could generate some pattern that created entertaining music when played together for the user to guess. In short, there're many opportunities for me to play with this project. 


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Nam Hoang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.