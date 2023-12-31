gsap.registerPlugin(TextPlugin);
gsap.to('#profesi', { duration: 5, text: 'Web Developer', delay: 2 });
gsap.from('#navbar', { opacity: 0, y: -100, duration: 1 });
gsap.from('#foto-profil', { opacity: 0, y: -100, duration: 3 });
gsap.from('#nama', { opacity: 0, x: -200, duration: 1, ease: 'power2.out' });
gsap.from('#deskripsi', { opacity: 0, x: -200, duration: 1 });
// gsap.from('#email', { opacity: 0, y: -10, duration: 1 });
// gsap.from('#wa', { opacity: 0, y: -10, duration: 1 });
// gsap.from('#instagram', { opacity: 0, y: -10, duration: 1 });
// gsap.from('#github', { opacity: 0, y: -10, duration: 1 });
// gsap.from('#linkedin', { opacity: 0, y: 210, duration: 1, ease: 'back.out(1.7)' });
gsap.from('#icon', { opacity: 0, y: 150, duration: 2.5, ease: 'back.out(1.7)' });
gsap.from('#resume', { opacity: 0, duration: 3 });
gsap.from('#toTop', { opacity: 0, y: 150, duration: 2.5 });
