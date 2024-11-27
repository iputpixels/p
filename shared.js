<!-- Save this as shared.js -->
const pageTransition = {
    init() {
        // Add transition overlay to both pages
        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        document.body.appendChild(overlay);

        // Add shared styles
        const style = document.createElement('style');
        style.textContent = `
            .page-transition-overlay {
                position: fixed;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: #1a1a2e;
                z-index: 1000;
                transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .page-transition-overlay.active {
                transform: translateX(100%);
            }

            .content-wrapper {
                transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .content-wrapper.sliding {
                transform: translateX(100%);
            }

            body {
                overflow-x: hidden;
            }
        `;
        document.head.appendChild(style);
    },

    async navigate(url) {
        const overlay = document.querySelector('.page-transition-overlay');
        const content = document.querySelector('.content-wrapper');

        // Start transition
        overlay.classList.add('active');
        content.classList.add('sliding');

        // Wait for animation
        await new Promise(resolve => setTimeout(resolve, 600));

        // Navigate to new page
        window.location.href = url;
    }
};

// Initialize transition system
document.addEventListener('DOMContentLoaded', () => {
    pageTransition.init();
});