# Moveo task – users page

users page App - [Link](http://omer-moveo-task.s3-website-us-east-1.amazonaws.com/)

## General information

In this task, I created a table of users from external API. The table contain basic information about the user like picture, name, email, gender and age. The table has a pagination control that show the user 10 users each time and there is a control panel at the bottom of the table. There is an option to sort the table by each of the columns by clicking the column name.
to get more information about a user, there is an option to click on the user row and information page about him will open. In this page, in addition to the information that was in the table, there is a map that shows his location.

## Technologies

In this project I used react framework to my client side. For communicate with the users' external API I used Axios library. I used Google maps API for display the map. Another library I used is material UI for styling the table. To create more than one route I used react router library. Finally, to host this web application, I upload the build folder to S3 bucket in AWS.
