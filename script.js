// Age Gate Logic
document.addEventListener('DOMContentLoaded', function() {
    const ageGateModal = document.getElementById('ageGateModal');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const mainContent = document.getElementById('mainContent');
    const underageContent = document.getElementById('underage');

    // Check if user has already verified age
    const ageVerified = localStorage.getItem('ageVerified');
    
    if (ageVerified === 'true') {
        // User has already verified - show main content
        ageGateModal.style.display = 'none';
        mainContent.style.display = 'block';
        underageContent.style.display = 'none';
    } else {
        // First time visitor - show age gate
        ageGateModal.style.display = 'flex';
        mainContent.style.display = 'none';
        underageContent.style.display = 'none';
    }

    // Handle "Yes, I'm 18+" button
    yesBtn.addEventListener('click', function() {
        // Store verification in localStorage (valid for this browser/device)
        localStorage.setItem('ageVerified', 'true');
        
        // Hide age gate and show main content
        ageGateModal.style.display = 'none';
        mainContent.style.display = 'block';
        underageContent.style.display = 'none';
        
        // Smooth transition
        mainContent.classList.add('fade-in');
    });

    // Handle "No, I'm Under 18" button
    noBtn.addEventListener('click', function() {
        // Show underage message
        ageGateModal.style.display = 'none';
        mainContent.style.display = 'none';
        underageContent.style.display = 'flex';
    });

    // Smooth scrolling for navigation links (already handled by CSS scroll-behavior)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Smooth scroll is handled by CSS, just close any mobile menus if needed
        });
    });

    // Add fade-in animation for main content
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});

// Optional: Log when user enters the site (for analytics)
function trackSiteEntry() {
    console.log('User entered Empire Road Brewery website');
    // Could be used for Google Analytics or other tracking
}

// Optional: Add click tracking to external links
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            console.log('User clicked external link: ' + href);
            // Could be used for analytics
        });
    });
});
