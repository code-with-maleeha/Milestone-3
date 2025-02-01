document.getElementById('resume-form')?.addEventListener('submit' , function(event){
    event.preventDefault()

    const profilePicInput=document.getElementById('profilePic') as HTMLInputElement;
    const nameElement=document.getElementById('name') as HTMLInputElement;
    const emailElement=document.getElementById('email') as HTMLInputElement;
    const contactElement=document.getElementById('contact') as HTMLInputElement;
    const addressElement=document.getElementById('address') as HTMLInputElement;
    const educationElement=document.getElementById('education') as HTMLInputElement;
    const skillsElement=document.getElementById('skills') as HTMLInputElement;
    const experienceElement=document.getElementById('experience') as HTMLInputElement;


    if(profilePicInput && nameElement && emailElement && contactElement && addressElement && educationElement && skillsElement && experienceElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const address = addressElement.value;
        const education= educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;

    
    const profilePicFile = profilePicInput.files?.[0]
    const profilePicURL = profilePicFile ? URL.createObjectURL(profilePicFile) : '';

    //generate resume
    const resumeHTML = `
    <center><h2><b>Resume</b></h2></center>
    ${profilePicURL? `<img src="${profilePicURL}" alt = "Profile Picture" class="profilePic">`: ''}
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Contact:</b> ${contact}</p>
    <p><b>Address:</b> ${address}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;
const resumeHTMLElement = document.getElementById('resume-display')
if(resumeHTMLElement){
    resumeHTMLElement.innerHTML = resumeHTML
}else{
    console.error('The resume output elements are missing')
}
}else{
    console.error('One or more elements are missing')
}
}
)

