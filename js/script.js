
const allUsers = users

//Set Total of users
var user = document.getElementsByClassName('page-header');
user[0].querySelector('h3').innerHTML = 'Total: ' + allUsers.length

//Set initial range of users to display
var ranges = {'start': 0, 'end':10};
display();

//Function that generate the user to display
function display(){
var list = "";
for(var i = ranges.start; i < ranges.end; i++) {
    list += `<li class="contact-item cf">` + 
        `<div class="contact-details">` +
        `<img class="avatar" src="${allUsers[i].image}">` +
        `<h3>${allUsers[i].name}</h3>` +
        `<span class="email">${allUsers[i].name.replace(" ",".")}@example.com</span>` +
        `</div><div class="joined-details">` +
        `<span class="date">Joined ${allUsers[i].joined} </span>  </div></li>`
}
document.getElementById('list').innerHTML = list;
}


//Create pagination
var pagination = "";
const userPages = Math.ceil(allUsers.length / 10) + 1;
for(var i = 1; i < userPages; i++) {
     pagination += `<li><a href="#" id="page${i}">${i}</a></li>`
}

document.getElementById('pagination').innerHTML = pagination;


//set up for users to display based on page
const pages = Array.from(document.querySelectorAll('a'));
pages.map(pages => pages.addEventListener('click', updateData))

//update start and end of range and call Display function
function updateData(e){
    ranges.end = 10 * e.srcElement.innerHTML;
    if (ranges.end > allUsers.length){
        ranges.start =  ranges.end - 10;
        ranges.end = allUsers.length;
        
    }
    //ranges.start =  ranges.end - 10;
    console.log(ranges)
    display()
}
