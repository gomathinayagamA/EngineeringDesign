var AddBtn = document.getElementById("Add");
AddBtn.addEventListener("click",saveValues);
function saveValues()
{
   var site = document.getElementById("site_name").value;
   var time = document.getElementById("site_time").value;
     window.localStorage.setItem(JSON.stringify(site),Number(time));
     alert("Stored");
}
