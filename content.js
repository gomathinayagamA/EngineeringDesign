//alert('You are not allowed  !!!')

var hashmap = {};

hashmap["https://www.instagram.com/"] = 17;
hashmap["https://www.facebook.com/"] = -1;

var today = new Date();
var time = today.getHours();

var site = window.location.href;


//alert(hashmap[site])      

if(hashmap[site] == -1)
{s
  alert('You are not allowed to access this site');
  window.location.replace("https://www.google.com/");

}

else if(hashmap[site] > time)
{
  alert('You cannot access this site after '+hashmap[site]+":00");
  window.location.replace("https://www.google.com/");
}
