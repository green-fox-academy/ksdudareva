'use strict';

//       Write the image's url to the console.

let imageURL = document.querySelector('img');
console.log(imageURL.getAttribute('src'));

//       Replace the image with a picture of your favorite animal.

imageURL.setAttribute('src', 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/74789933_527600934468509_7453236647748960256_n.jpg?_nc_cat=105&_nc_eui2=AeEn-Uv0_elayIQ7WjAR2PIq2XtIMaADRhLUYuAr6qUtugLbuy-C0JN9rR4ZnbQoBmcHTkXt94toJ01ok1cAn36hvqrfaFAiflSnbMFp_eholw&_nc_oc=AQmNuigBmbVrD2gi1VnLgRJ-pVgOQ04UNVwcVuCo21tcGWcZb_11O5G75UkVzjzmIEI&_nc_ht=scontent-vie1-1.xx&oh=e1574bfae69f921426fa9fe7a790ceb8&oe=5E1B5771')
imageURL.setAttribute('height', 200);

//       Make the link point to the Green Fox Academy website.

let greenFox = document.querySelector('a');
greenFox.setAttribute('href', 'https://www.greenfoxacademy.com/en/home')

//       Disable the second button.
//       Replace its text with 'Don't click me!'.

document.getElementsByClassName('this-one')[0].disabled = true;
document.getElementsByClassName('this-one')[0].innerHTML = "Don't click me!"; 