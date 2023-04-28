var form=document.getElementById("myform")


form.addEventListener('submit',function(e){
  e.preventDefault()

  var search=document.getElementById("search").value

  var originalName=search.split(' ').join('')
  console.log(originalName)

  // Get the element with the ID "my-element"
const myElement = document.getElementById("result");

// Check if the element exists
if (myElement) {
  // Set the innerHTML property of the element
  myElement.innerHTML = "Hello, world!";
} else {
  console.error("Element not found");
}

  
  
  var obj=fetch("https://api.github.com/users/"+originalName)
  .then((result)=>result.json()).then((data)=>{
    document.getElementById("result").innerHTML=`
    <a target="_blank" href="https://github.com/${originalName}"><img src="${data.avatar_url}"/></a>
    <h3>${data.login}</h3>
    <a href="${data.html_url}" target="_blank">Click Here to visit!!!&#128072;</a>
    `
  }).catch(error => {
    // Handle errors that occur during the request
    console.error("Error fetching user data:", error);
  });

  
})