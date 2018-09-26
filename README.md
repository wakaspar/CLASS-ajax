# CLASS-ajax
Berkeley / Stanford (HS) Education Unlimited 2018  - jQuery API ($ajax) Demo

 ## Dogs & Lighthouses - Introduction
 The purpose of this project is to showcase two easy-to-learn, but highly useful jQuery techniques for building custom web front-ends.  
 
The first is to use jQuery's event listeners to track the window size and distance scrolled from the top to change a website's background (anchored to a fixed position) upon scrolling a certain distance (usually the window's height).  This is achievable with some clever CSS and a little jQuery and has been employed by my students when  building visually-heavy sites, such as gaming fan sites, to showcase the graphics of their favorite titles.  Turns out, everyone like BIG pictures of FortNite.  Who knew?
 
The second purpose is to showcase the functionality of $ajax(), jQuery's API call method.  In a weeklong class, we don't quite have time to dive into database abstraction and development, but we do have time to learn how to leverage public APIs to access and bring data back into the client using JavaScript, which I teach the basics of in the previous day's class. More on that HERE.  Let's take a look at how these features work:

## Installation & Setup
Fork it, clone it, what have you.  Simple static site, only libraries are [Bootstrap](https://getbootstrap.com/) and [jQuery](https://jquery.com/), but they're maintained through a couple CDN links that could go out-of-style.  If they break, just update them. :)

In Terminal:
```
$ cd CLASS-ajax
$ open index.html
```

## Lighthouses ~ Switch-On-Scroll jQuery
This code grabs the height of the window and then runs a series of conditionals to evaluate the distance between the user's current position and the top of the website.  It changes the CSS value for the background image accordingly.
 ```
   $(window).scroll(function(){
    var scrollPos = $(window).height();
    if($(this).scrollTop() > scrollPos * 3) {
      $('body').css('background-image', 'url(images/lh4.jpg)');
    } else if ($(this).scrollTop() > scrollPos * 2) {
      $('body').css('background-image', 'url(images/lh3.jpg)');
    } else if ($(this).scrollTop() > scrollPos) {
      $('body').css('background-image', 'url(images/lh2.jpg)');
    } else {
      $('body').css('background-image', 'url(images/lh1.jpg)');
    }
  });
 ```
 I always point out the descending order of how we're evaluating things.  It's interesting that the last condition written is the default starting condition, as many novice programmers would expect 'default' to be right at the top.  Though this pattern may seem unorthodox, I've found the results to be solid.
 
 ```
 body {
  background-color: black;
  background-image: url('images/lh1.jpg');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
 ```
 This chunk of CSS, applied to the ```<body>``` HTML tag sets our default background and ensures that it doesn't move (```background-attachment: fixed;```), that it stays centered (```background-position: center;```), and that it covers the size of the whole window, no matter what you resize it to be (```background-size: cover;```).  The second rule, ```background-image: url('lh1.jpg');``` holds the value that we're switching on-scroll with jQuery.  Finally, we set ```background-color: black;``` to be sure that, if there's a slight load time between images, users don't get a bright white screen flashed in their faces, making for a much more pleasant user experience overall at super-low technical cost.
 
## Dogs ~ API Calls With $ajax()
Ajax is jQuery's built-in API data retrieval method.  Most Ajax calls contain relatively similar objects, such as the request below.

A simple ajax GET request:
```
   $.ajax({
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/image/random',
    dataType: 'json',
    success: onSuccess,
    error: onError
  });
 ```
 This one to get a picture of a random dog from the [Stanford Dogs API](https://dog.ceo/dog-api/).
 
 First, we set our ```method``` to ```GET```, which is the kind of API operation that we're going to do, as we're going to 'get' or 'read' data.  Next, we set our ```url```, which I feel like is pretty obviously the web address of the API endpoint that we're hitting.  Setting our ```dataType: 'json'``` isn't always necessary, I find, but it helps ensure that what you're getting back is in the format that you want it in, as well as giving transparency to anyone looking at the call attempting to understand its inner workings.
 
 
 We also need some methods (```success``` and ```failure```) to handle the response from the API.  Here, we're just going to log our response ```res``` to console.
 ```
 function onSuccess(res){
  console.log('gg, Ajax:' + res.message);
  $('.api-dog').attr('src', res.message);
}
 ```
 The above fires if ajax is successful.
 
 ```
 function onError(res){
  console.log('failjax:' + res);
}
 ```
 The above fires if ajax fails.

 ### Client-side storage
 A request from a student to look into: *"Is it possible to store data in the client?"* I started to get a solution implemented that seemed to be able to store data in the browser's cache, but I haven't successfully retrieved it yet.

 ## Tech Used
 + HTML5/CSS3/JavaScript
 + jQuery
 + Bootstrap

 ## Conclusion
 I tend not to teach this lesson to the middle school students, opting instead to give them an extra day to build their personal projects (it's worth noting that the MS camp is also a day shorter).  However, the high school kids appreciate it greatly.  As their older, they have more knowledge of what is possible on the internet and therefore more pointed questions about how to achieve said ends.  
 
"What if I want to password protect my website?" is a great question for a 17-year-old to be asking, but not something we have time to dive into, unfortunately.  Being able to teach API calls gives these older students the ability to get their hands on *some* amount of data, no matter how frivolous, so that they can start to learn about scalability, integration, and other increasingly important concepts to today's modern Internet infrastructure.  It's literally meant to be *the tip of the iceberg*.  If you have any questions, comments, or feedback, feel free to reach out to [wakaspar@gmail.com](mailto:wakaspar@gmail.com). Thanks for checking out this repo!
