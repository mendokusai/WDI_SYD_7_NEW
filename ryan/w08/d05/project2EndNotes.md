#Project 2 Yaps

Goal of Yaps from day 1 was to be a websockets app that allowed chat. Video was definitely saught after, but quickly evaporated with the scale of the project as it evolved early on.
Yaps intended to be a chatroulette-type clone, with a definite socket to Reddit, as both Joel and I really liked the site and wanted to learn more about the API. 

At the onset, the plan was to use rails for everything, including the websockets. After a weekend of reading documentation, we changed tacks to focus on *Node.js*.

#Division of labor 

Ryan focused on making the websockets work and the Javascript, Joel focused on the Reddit API and managed set up for Oauth connections. Styling, was shared between the two of us. We pushed to Heroku early, and then as often as possible. 

Working with both Node & Rails created an extra amount of set up, but as soon as it was up, we were better for doing it early. 

#Challenges

It took a long time to learn Node. A very long time to understand how it work, I blame the way I had each socket listener nested in an io connection. Once Jack helped me to move them all into one single IO, it became much easier to see how node was working and then to make connections across the server and client side.

#Node 

Node instantly worked, and the code was short, but it took me a while to see how it actually worked. Now I'm confident I could write the code much cleaner if I did it again.

#Authorizations

My biggest sadness with this project was not paying enough attention to how the Oauth worked OR how JOEL set up the reddit API. I'll look over the code and see if I can find out. I'll probably just have him walk through the process with me.

##The CORS error

I wish I knew more about what solved the problem, but the CORs error was madness. I guess I sas happiest to learn that it wasn't something I created, but just a general issue of cross-server communication security that are murky and hard to know. 

Aside from the challenge of the CORS, it took extra time because I did not have a way to work locally (working with two servers and all) It was good to learn how to do that.

#Javascript

Javascript wasn't too bad, but I definitely have a clunky function (is it even a function?!) to process messages. Every message is set in the same way with a class&color for the username, the simple <p> for the text and then a different <p> for the datestamp.

Now that I have a moment to stop and think, there's no reason that had to be that way. None. May refactor it because the JS script in the index page is so massive.

#Reddit API

I wish I knew more about how this works. Our goals with Reddit were very loose and through that, the utilization, in the end, is rather light. That said, the reddit API data is immense! Assuming we revisit API and come to a stronger means to utilize it, we can probably do some crazy/awesome shit someday.

#pain points

I don't know what I would have done with the CORS error without Jacks help and *getting* node took longer than I aloted time for, but in the end I got there.



#Wins

Learning Node was really great. I was happy to not really struggle with javascript, and had I not known it, the whole project would have been different. *What else can node be used for? What other ways can node be used? Very curious...

Regular Expression was not specifically nice to work with, but the end result was getting things like *links* and *GIFS* working in the chatrom! Honestly, I could learn nothing new and the reality that I can make a chatroom that displays gifs is enough to feel like the course has been worth it!

Working with Joel was fun in all the ways that working with Phil on project one was a nightmare. We never had merge conflicts (ok I had one or two, but that was it!).

Vito and Lenny were also awesome to work with. Their project (Rock Paper Scissors with LEAP Motion is awesome).

#Shortcomings

As Joel and I spent the whole time fighting to stay ahead of the curve and keep the project on schedule (barely), styling was the clear victim. Groups that had a designer involved (Mike and Freddy & Ben, Eugene, Alan) had a phenomenal advantage. I don't think Yaps is totally hideous, but a re-styling would go a long way.

I'll stop there because I've said plenty. Nevertheless, this project was fantastic fun, challenging, and really felt like a great experience.





