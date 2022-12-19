let html = document.querySelector('html');
html.lang = navigator.language || 'en';

// Projects

const projectsContainer = document.querySelector('.projects-container');
const project = document.querySelector('.project');

projects.forEach(project => {
  const {id, title, description, list, image} = project;
  
  const projectContain = `
    <div class="mt-3 col-12 col-md-6 col-lg-4 card text-bg-light">
        <img src=${image} class="card-img" alt=${title}>
        <div class="card-img-overlay bg-overlay-opacity">
            <h5 class="card-title text-green-color">${title}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text text-dark fw-bold"><small>${list}</small></p>
            <a class='btn btn-outline-dark' onclick="onProjectClick(${id});" data-bs-toggle="modal" data-bs-target="#project-${id}">More details... <i class="bi bi-caret-right-square-fill"></i></a>
        </div>
    </div>
  `
  projectsContainer.innerHTML += projectContain;
});



// Modal

const modalContainer = document.querySelector('.modal-container');

function onProjectClick(id) {
  const modalContain = `
  <div class="modal fade" id="project-${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title text-green-color" id="exampleModalLabel">${projects[id].title}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src=${projects[id].imageModal} class='img-fluid' />
            <p class='ms-4 mt-4 fs-5 fw-bold'>${projects[id].description}</p>
            <aside class="ms-4 portfolio-details">
                <small><b>CLIENT</b></small>
                <SMall>${projects[id].title}</SMall>
                <small><b>DATE</b></small>
                <small>${projects[id].date}</small>
                <small><b>PROJECT</b></small>
                <small>${projects[id].projectType}</small>
            </aside>
        </div>
        <div class="modal-footer">
            <a href='${projects[id].url}' type="button" class="btn btn-success" target='_blank'>Visit now... <i class="bi bi-caret-right-square-fill"></i></a>
        </div>
        </div>
    </div>
    </div>
  `
  modalContainer.innerHTML = modalContain;
}






/* Boot */
function enviar_mensaje(){
	var a = document.getElementById("chat-input");
    if ("" != a.value) {
        var b = document.getElementById("get-number").innerHTML,c = document.getElementById("chat-input").value, d = "https://web.whatsapp.com/send", e = b,  f = "&text=" + c;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";  var g = d + "?phone=" + e + f;  window.open(g, "_blank");
    }
}
 
const whatsapp_chat =document.getElementById("whatsapp-chat");
   
function cerrar_chat(){
    whatsapp_chat.classList.add("hide");
    whatsapp_chat.classList.remove("show"); 
}

function mostrar_chat(){
    whatsapp_chat.classList.add("show");
    whatsapp_chat.classList.remove("hide");
}