const form = document.querySelector('form');
const avatar = document.getElementById("avatar");
const boton = document.getElementById("boton");
const indicacion = document.getElementById("indicacion");

const file_instructions = document.getElementById("file_instructions");
const change = document.getElementById("change");
const remove = document.getElementById("remove");


const mensajeOriginal = indicacion.innerHTML;

const limite = 500 * 1024;

avatar.addEventListener("input", ()=>{
  const fileInput = avatar;
  const file = fileInput.files[0];

  if (file && file.type.startsWith('image/')){
    const reader = new FileReader();
    reader.onload = function (){
      const avatarBase64 = reader.result;
      const uploadIcon = document.querySelector("#upload_avatar");
      if (uploadIcon) {
        uploadIcon.src = avatarBase64;
      } 
    }

    if(file.size > limite){
      indicacion.innerHTML = `<p style="color: yellow" >⚠️ The image exceeds the allowed size<p>`;
      avatar.value = "";
      
    }

    else{reader.readAsDataURL(file);
      indicacion.innerHTML = mensajeOriginal;
      file_instructions.style.display = "none";
      change.removeAttribute("hidden", true);
      remove.removeAttribute("hidden", true);
    }
  

  }

  else if(!file.startsWith('image/')) {
    indicacion.innerHTML = `<p style="color: red">❌ Solo se permiten imágenes (JPG o PNG).</p>`
    avatar.value = "";
  }
  
  else{
    indicacion.innerHTML = mensajeOriginal;
    file_instructions.style.display = "none";
    change.removeAttribute("hidden", true);
    remove.removeAttribute("hidden", true);
  }
})

remove.addEventListener("click", (e)=>{
    e.preventDefault();
    avatar.value = '';
    const uploadIcon = document.querySelector("#upload_avatar");
    uploadIcon.src = "/assets/images/icon-upload.svg"

    indicacion.innerHTML = mensajeOriginal;

    file_instructions.style.display = "block";
    change.setAttribute("hidden", true);
    remove.setAttribute("hidden", true);

})

change.addEventListener("click", (e)=>{
  e.preventDefault()
  avatar.click();
}
)


form.addEventListener("submit", async(e)=>{
  e.preventDefault();

  const avatar = document.getElementById("avatar").files[0];
  const name = document.getElementById("full_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const github = document.getElementById("github").value.trim();

  let isValid = true;
 
  
  if(!avatar){
    document.getElementById("avatar-error").style.display = "block";
    isValid = false;
  }
  
  if(!name){
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  }
  
  if(!email){
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  if(!github){
    document.getElementById("github-error").style.display = "block";
    isValid = false;
  }

  if(isValid === true){
    const reader = new FileReader();
    reader.onload = function(){
      const avatarBase64 = reader.result;
      console.log(avatarBase64);
      localStorage.setItem("avatar", avatarBase64);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("github", github);
      window.location.href = "ticket.html";

    }
    reader.readAsDataURL(avatar);
  }
  
})




