
function updateProfileImage(input) {
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            
            const imgElement = document.getElementById('profile-image');
            imgElement.src = e.target.result;
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

function logoff() {
    window.location.href = 'index.html';
}

function goHome() {
    window.location.href = 'home.html';
}

function goDatabook() {
    window.location.href = 'databook.html';
}

function goSuport() {
    window.location.href = 'suport.html';
}