# Pineapple Platform Game

### Game Description
For our final software engineering project, we decided to develop a **multilevel 2D platform game application on Unity** with an online leaderboard displaying user scores. The game allows users to maneuver a character through a 2D terrain. The terrain contains a series of razor like obstacles, requiring characters to utilize platforms to avoid them. Additionally, users are offered the challenge of collecting pineapple tokens to increase their score.

The user's names and final scores are saved on a database and **displayed on a leaderboard** on a locally hosted website. Lastly, returning players can **check their most recent score** by entering their name at the start screen.

### Storing and Displaying Information
We used a Model View Controller (MVC) architecture to store user information. Using C# and Razor code, we developed a Model to create the data sets, a View to send data to Controller to process, and a Control to manipulate data and update the model.

We used Firetime Realtime Database, a NoSQL cloud-hosted database, to display the leaderboard on a locally hosted website. The website was coded in html and JavaScript.

<img width="394" alt="Screenshot 2024-10-23 at 11 14 41 AM" src="https://github.com/user-attachments/assets/23dbbb63-88d1-4b11-b8f2-09c97ed6e256">

Here is a view of the website after three users have played. As you can see, their names and scores are shown in descending order.

For the feature on the start screen, we had a bar below the start button where users could enter their usernames. If the username is entered that has not been saved before, no score will display on the screen.

<img width="402" alt="Screenshot 2024-10-23 at 11 18 24 AM" src="https://github.com/user-attachments/assets/8e31dfe3-0d3c-4209-b114-8ceac3c9b02a">

Here is the start screen where user 'adm' has a past score of 10.
