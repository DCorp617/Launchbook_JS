// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sidebar = document.getElementById('sidebar-left');

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sidebar.getElementsByClassName('favorites')[0].className = "Least Favs"

// Exercise 5): Find the first of the ads in the sidebar and hide it.
let hideAds = document.getElementsByClassName('ads')[0]

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
hideAds.style.visibility = 'visible';

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let adSlot = document.getElementsByClassName('ad-slot')[0]
src = adSlot.getElementsByTagName('img')[0]
let url = adSlot.getAttribute('href')
src.setAttribute('src', 'http://placebear.com/200/300')

// Exercise 8): Find Sam's post and change its text to something incredible.
profileText = document.getElementsByClassName('media-body')[4]
profileText.innerHTML = "<h4>Sam McTaggart</h4><p>Life is truly incredible.</p>"

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
firstPost = document.getElementsByClassName('media-body')[1];
firstPost.className = firstPost.className + ' post-liked'

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
secondPost = document.getElementsByClassName('inline-list post-actions')[1];
shareButton = secondPost.getElementsByTagName('li')[2]
shareButton.className = shareButton.className + ' post-shared'
