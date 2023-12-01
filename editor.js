document.addEventListener('DOMContentLoaded', function() {
    const projectName = document.querySelector('.name');
  
    projectName.addEventListener('input', function() {
      document.title = projectName.textContent || 'Untitled Project';
    });
  });
  
function run(){
    let htmlCode = document.getElementById("html").value;
    let cssCode = document.getElementById("css").value;
    let jsCode = document.getElementById("js").value;
    let Output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode +"</style>";
    output.cotentWindow.eval(jsCode)
}