// 1. 导航栏平滑滚动和 active 类切换
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // 滚动事件：改变导航栏样式和更新active链接
    window.addEventListener('scroll', () => {
        // 导航栏变色
        header.classList.toggle('sticky', window.scrollY > 50);

        // 更新active链接
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. 移动端汉堡菜单 (在CSS中已准备好样式，JS只需添加逻辑)
    // 需要在HTML中添加 <i class="fa-solid fa-bars menu-toggle"></i>
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    if(menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuToggle.classList.toggle('fa-bars');
            menuToggle.classList.toggle('fa-times');
        });
    }
});