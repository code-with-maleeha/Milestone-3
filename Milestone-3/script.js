var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePicInput = document.getElementById('profilePic');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    if (profilePicInput && nameElement && emailElement && contactElement && addressElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicURL = profilePicFile ? URL.createObjectURL(profilePicFile) : '';
        //generate resume
        var resumeHTML = "\n    <center><h2><b>Resume</b></h2></center>\n    ".concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt = \"Profile Picture\" class=\"profilePic\">") : '', "\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ").concat(name_1, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Contact:</b> ").concat(contact, "</p>\n    <p><b>Address:</b> ").concat(address, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        var resumeHTMLElement = document.getElementById('resume-display');
        if (resumeHTMLElement) {
            resumeHTMLElement.innerHTML = resumeHTML;
        }
        else {
            console.error('The resume output elements are missing');
        }
    }
    else {
        console.error('One or more elements are missing');
    }
});
