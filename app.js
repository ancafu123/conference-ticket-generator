const form = document.querySelector('form');
const avatar = document.getElementById("avatar");
const boton = document.getElementById("boton");
const indicacion = document.getElementById("indicacion");

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
    }

    else{reader.readAsDataURL(file);
      indicacion.innerHTML = mensajeOriginal;
    }
  }
  else{indicacion.innerHTML = `<p style="color: red">❌ Solo se permiten imágenes (JPG o PNG).</p>`}
})

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




