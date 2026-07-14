// Popup open karne ke liye
function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

// Popup close karne ke liye
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Ek popup se dusre popup par jump karne ke liye
function switchPopup(closeId, openId) {
    closePopup(closeId);
    openPopup(openId);
}

// Log In form submit logic
function handleLogin(event) {
    event.preventDefault(); // Form reload hone se rokta hai
    const username = document.getElementById('login-username').value;
    
    if(username.trim() !== "") {
        loginUser(username);
        closePopup('login-popup');
    }
}

// Sign Up form submit logic
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    
    if(name.trim() !== "") {
        loginUser(name);
        closePopup('signup-popup');
    }
}

// User successfully logged in status
function loginUser(username) {
    // Shuruati "Create Your Account" button gayab karein
    document.getElementById('create-btn').style.display = 'none';

    // Thank You message aur Profile information showcase karein
    document.getElementById('thank-you-msg').style.display = 'block';
    document.getElementById('profile-sec').style.display = 'flex';

    // Username set karein aur uska pehla letter display karein
    document.getElementById('display-username').innerText = username;
    document.getElementById('profile-pic').innerText = username.charAt(0);
}

// Log Out logic - Sab kuch reset karne ke liye
function logout() {
    // Message aur profile info hide karein
    document.getElementById('thank-you-msg').style.display = 'none';
    document.getElementById('profile-sec').style.display = 'none';

    // Main button wapas dikhayein
    document.getElementById('create-btn').style.display = 'inline-block';

    // Input fields clear karein
    document.getElementById('login-username').value = '';
    document.getElementById('signup-name').value = '';
}