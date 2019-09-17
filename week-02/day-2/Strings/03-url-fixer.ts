'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let wrong: string = 'bots';
let right: string = 'odds';
let pos: number = 5;

url = url.replace(wrong, right);

url = url.substring(0, pos) + ':' +url.substring(pos);

console.log(url);
