/* ==========================================================================
   KISAN SAHAYAK • AGRITECH STARTUP PORTFOLIO
   Clean Interactive Logic (Direct Email & WhatsApp Delivery)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll for internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile Navbar Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }

  // Direct Communication Action Buttons
  const btnSendGmail = document.getElementById('btnSendGmail');
  const btnSendWA = document.getElementById('btnSendWA');

  // Helper to extract current form values
  function getFormData() {
    const name = document.getElementById('userName')?.value.trim() || 'Website Visitor';
    const phone = document.getElementById('userPhone')?.value.trim() || 'Not provided';
    const email = document.getElementById('userEmail')?.value.trim() || 'Not provided';
    const category = document.getElementById('userCategory')?.value || 'General Inquiry';
    const msg = document.getElementById('userMsg')?.value.trim() || '';
    return { name, phone, email, category, msg };
  }

  // 1. Send via Gmail / Default Mail App (Direct to gudlaudaybhaskar@gmail.com)
  if (btnSendGmail) {
    btnSendGmail.addEventListener('click', () => {
      const data = getFormData();
      const subject = encodeURIComponent(`KisanSahayak Inquiry: ${data.name} (${data.category})`);
      const body = encodeURIComponent(
        `Hello Uday,\n\nI am contacting you regarding KisanSahayak / Team AGRI DEVELOPERS.\n\n` +
        `• Name: ${data.name}\n` +
        `• Category: ${data.category}\n` +
        `• Phone: ${data.phone}\n` +
        `• Email: ${data.email}\n\n` +
        `Message:\n${data.msg || '(No message written)'}\n`
      );
      window.location.href = `mailto:gudlaudaybhaskar@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // 2. Send via WhatsApp (Direct to +91 78941 75342)
  if (btnSendWA) {
    btnSendWA.addEventListener('click', () => {
      const data = getFormData();
      const text = encodeURIComponent(
        `*New KisanSahayak Inquiry*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Category:* ${data.category}\n` +
        `*Phone:* ${data.phone}\n` +
        `*Email:* ${data.email}\n\n` +
        `*Message:*\n${data.msg || '(No message written)'}`
      );
      window.open(`https://wa.me/917894175342?text=${text}`, '_blank');
    });
  }
});
