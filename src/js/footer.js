export function loadFooter() {
    const footerHTML = `
      <footer class="footer">
        <div class="container">
          <ul class="footer__nav">
            <li class="footer__nav-list">
              <h5 class="footer__nav-title">ნავიგაცია</h5>
              <ul class="footer__nav-content">
                <li><a class="footer__nav-link" href="#">პერსონალურ მონაცემთა დაცვის პოლიტიკა</a></li>
                <li><a class="footer__nav-link" href="#">ჩვენ შესახებ</a></li>
                <li><a class="footer__nav-link" href="#">წესები დაპირობები</a></li>
                <li><a class="footer__nav-link" href="#">მიწოდების სერვისი</a></li>
                <li><a class="footer__nav-link" href="#">კარიერა</a></li>
              </ul>
            </li>
            <li class="footer__nav-list">
              <h5 class="footer__nav-title">გადახდები</h5>
              <ul class="footer__nav-content">
                <li><a class="footer__nav-link" href="#">გადახდის მეთოდები</a></li>
                <li><a class="footer__nav-link" href="#">გარანტია</a></li>
                <li><a class="footer__nav-link" href="#">განვადება</a></li>
                <li><a class="footer__nav-link" href="#">ნივთის დაბრუნება</a></li>
                <li><a class="footer__nav-link" href="#">ნივთის ონლაინ ყიდვის ინსტრუქცია</a></li>
              </ul>
            </li>
            <li class="footer__nav-list">
              <h5 class="footer__nav-title">გამოგვყევი</h5>
              <ul class="footer__nav-content">
                <li><a class="footer__nav-link" href="#"><img src="https://zoommer.ge/icons/footer/fb.svg" alt="icon"/><span>Facebook</span></a></li>
                <li><a class="footer__nav-link" href="#"><img src="https://zoommer.ge/icons/footer/youtube.svg" alt="icon"/><span>Youtube</span></a></li>
                <li><a class="footer__nav-link" href="#"><img src="https://zoommer.ge/icons/footer/instagram.svg" alt="icon"/><span>Instagram</span></a></li>
                <li><a class="footer__nav-link" href="#"><img src="https://zoommer.ge/icons/footer/tiktok.svg" alt="icon"/><span>Tik Tok</span></a></li>
              </ul>
            </li>
            <li class="footer__nav-list">
              <h5 class="footer__nav-title">კონტაქტი</h5>
              <ul class="footer__nav-content">
                <li><a class="footer__nav-link" href="#"><img src="https://zoommer.ge/icons/footer/gmail.svg" alt="icon"/><span>Info@zoommer.ge</span></a></li>
                <li><a class="footer__nav-link" href="#"><img src="https://zoommer.ge/icons/footer/phone.svg" alt="icon"/><span>+995 (32) 2 60 30 60</span></a></li>
                <li><a class="footer__nav-link" href="#"><img src="https://zoommer.ge/icons/footer/locations.svg" alt="icon"/><span>ფილიალები</span></a></li>
                <li><a class="footer__nav-link" href="#"><img src="https://zoommer.ge/icons/footer/locations.svg" alt="icon"/><span>კორპორატიული გაყიდვები</span></a></li>
              </ul>
            </li>
          </ul>
          <div class="footer__apps">
            <p>Zoommer App</p>
            <img src="https://zoommer.ge/images/e-360.svg" alt="ecommerce360 logo"/>
          </div>
        </div>
        <div class="line"></div>
        <p class="rights">Copyright © 2023 Zoommer.ge. All rights reserved.</p>
        <img id="scrollToTopBtn" class="scroll-to-top" src="https://zoommer.ge/icons/arrow-up-web.svg" alt="icon"/>
        <img class="compare" src="https://zoommer.ge/icons/quick-btn-compare.svg" alt="icon"/>
        <button class="chatbot"><ion-icon name="chatbubbles-outline"></ion-icon></button>
      </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
  