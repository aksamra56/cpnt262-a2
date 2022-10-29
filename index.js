// TODO: Being able to switch between both options in the boxes wihtout refreshing the page
const backgroundImage = document.querySelector ('select')
document.getElementById("backgroundImage").onchange = function() {

let getValue = document.getElementById("backgroundImage");
let value = getValue.value;

  if (value == "mad") {
    document.body.style.backgroundImage = ("url('assets/images/mad.jpg')");
    document.body.style.backgroundRepeat = ("no-repeat");
    document.body.style.backgroundSize = ("20em");
    document.body.style.backgroundPosition = ("bottom left");
} 
  else if(value == "confused") {
    document.body.style.backgroundImage = ("url('assets/images/confused.jpg')");
    document.body.style.backgroundRepeat = ("no-repeat");
    document.body.style.backgroundSize = ("30rem");
    document.body.style.backgroundPosition = ("bottom left");
}
  else if(value == "sad") {
    document.body.style.backgroundImage = ("url('assets/images/sad.jpg')");
    document.body.style.backgroundRepeat = ("no-repeat");
    document.body.style.backgroundSize = ("30rem");
    document.body.style.backgroundPosition = ("bottom left");
}
  else if(value == "happy") {
    document.body.style.backgroundImage = ("url('assets/images/happy.jpg')");
    document.body.style.backgroundRepeat = ("no-repeat");
    document.body.style.backgroundSize = ("30rem");
    document.body.style.backgroundPosition = ("bottom left");
}
}