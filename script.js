const toggle = document.getElementById('toggle');

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked)
})

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Light") {
      x.innerHTML = "Dark!";
    } else {
      x.innerHTML = "Light";
    }
}