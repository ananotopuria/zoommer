export function loadHeader() {
    const headerHTML = `
     <header class="header">
      <div class="sup-header">
        <div class="container sup-header__container">
          <div class="sup-header__contact">
            <img
              class="sup-header__phone-icon"
              src="https://zoommer.ge/icons/header-phone.svg"
              alt="Phone Icon"
            />
            <a class="sup-header__phone-number" href="#"
              >*7007 / +995 (32) 2 60 30 60</a
            >
          </div>
          <ul class="sup-header__menu">
            <li class="sup-header__menu-item">
              <a class="sup-header__link" href="./src/pages/trade-politics.html"
                >სავაჭრო პოლიტიკა</a
              >
            </li>
            <li class="sup-header__menu-item">
              <a class="sup-header__link" href="./src/pages/instalment.html"
                >განვადება</a
              >
            </li>
            <li class="sup-header__menu-item">
              <a class="sup-header__link" href="./src/pages/career.html"
                >კარიერა</a
              >
            </li>
            <li class="sup-header__menu-item">
              <a class="sup-header__link" href="./src/pages/trade-in.html"
                >Trade In</a
              >
            </li>
            <li class="sup-header__menu-item">
              <a class="sup-header__link" href="./src/pages/branches.html"
                >ფილიალები</a
              >
            </li>
            <li class="sup-header__menu-item">
              <a class="sup-header__link" href="./src/pages/all-promotions.html"
                >ყველა აქცია</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="sub-header">
        <div class="container">
          <div class="sub-header__container">
            <div class="wrapper">
              <div class="logo">
                <img
                  class="logo__img"
                  src="https://zoommer.ge/icons/main-logo.svg"
                  alt="logo"
                />
              </div>
              <div class="header__navigation">
                <a class="header__nav-link" href="#">
                  <img
                    class="header__nav-img"
                    src="https://zoommer.ge/icons/dots.svg"
                    alt="Navigation Icon"
                  />
                  <span class="header__nav-text"> ნავიგაცია </span>
                </a>
              </div>
            </div>
            <div class="header-search">
              <div class="header-search__search">
                <a
                  class="header-search__search-icon-link"
                  href="#"
                  id="searchButton"
                >
                  <img
                    class="header-search__icon"
                    src="https://zoommer.ge/icons/main-search.svg"
                    alt="Search Icon"
                  />
                </a>
                <input
                  class="header-search__input"
                  type="text"
                  name="q"
                  placeholder="ძიება"
                  autocomplete="off"
                />
              </div>
            </div>
            <div id="popularSearchesModal" class="search-modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <h2>პოპულარული სერჩები:</h2>
                <ul class="search__item">
                  <li class="search__item-list">iPhone 15</li>
                  <li class="search__item-list">iPhone 15 Pro</li>
                  <li class="search__item-list">Galaxy S24</li>
                  <li class="search__item-list">iPhone 11</li>
                  <li class="search__item-list">iPhone 12</li>
                  <li class="search__item-list">iPhone 14</li>
                  <li class="search__item-list">iPhone 13</li>
                  <li class="search__item-list">Laptops</li>
                  <li class="search__item-list">PS5</li>
                  <li class="search__item-list">JBL</li>
                  <li class="search__item-list">MacBook</li>
                  <li class="search__item-list">Pixel</li>
                  <li class="search__item-list">Polaroid</li>
                  <li class="search__item-list">iPad</li>
                  <li class="search__item-list">Dyson Hair Dryer</li>
                  <li class="search__item-list">Xiaomi 14</li>
                  <li class="search__item-list">Redmi Note 12</li>
                  <li class="search__item-list">Galaxy S23</li>
                  <li class="search__item-list">AirPods</li>
                  <li class="search__item-list">TV</li>
                  <li class="search__item-list">Smart Band 8</li>
                  <li class="search__item-list">Treadmill</li>
                  <li class="search__item-list">Macbook M3</li>
                  <li class="search__item-list">Apple Watch Ultra 2</li>
                  <li class="search__item-list">Dyson Airwrap</li>
                  <li class="search__item-list">PS5 Controller</li>
                  <li class="search__item-list">Marshall</li>
                  <li class="search__item-list">Xbox</li>
                  <li class="search__item-list">DJI</li>
                  <li class="search__item-list">Dyson Vacuum Cleaner</li>
                  <li class="search__item-list">Power Bank</li>
                  <li class="search__item-list">Segway</li>
                </ul>
              </div>
            </div>
            <button class="header__user header__user--cart">
              <img
                class="header__icon"
                src="https://zoommer.ge/icons/header-cart.svg"
                alt="Cart Icon"
              />
              <p class="header__text">კალათა</p>
            </button>
            <button class="header__user header__user--login">
              <img
                class="header__icon"
                src="https://zoommer.ge/icons/user-icon.svg"
                alt="User Icon"
              />
              <p class="header__text">შესვლა</p>
            </button>
            <div id="cartModal" class="modal hidden">
              <div class="modal__container">
                <h5>კალათა</h5>
                <p>0 პროდუქტი</p>
              </div>
              <img
                class="modal__img"
                src="https://zoommer.ge/icons/emptybag.svg"
                alt="shop cart img"
              />
              <div class="modal__container">
                <p>ჯამური ფასი: 0 ₾</p>
                <button class="cart-btn">კალათის გახსნა</button>
              </div>
            </div>
            <div id="loginModal" class="modal hidden">
              <img
                class="close-btn"
                src="https://zoommer.ge/icons/mobile-modal-close.svg"
                alt="close-btn"
              />
              <div class="login__tab-container">
                <button
                  class="btn login__tab login__tab--1 login__tab--active"
                  data-tab="1"
                >
                  ავტორიზაცია
                </button>
                <button class="btn login__tab login__tab--2" data-tab="2">
                  რეგისტრაცია
                </button>
              </div>
              <div
                class="login__content login__content--1 login__content--active"
                data-tab="1"
              >
                <div class="modal__btns">
                  <button class="modal__btns-btn1">ნომრით ავტორიზაცია</button>
                  <button class="modal__btns-btn2">მეილით ავტორიზაცია</button>
                </div>
                <form class="modal__form">
                  <input
                    class="modal-input input-field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ელფოსტა"
                  />
                  <input
                    class="modal-input input-field"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="პაროლი"
                  />

                  <button type="submit" class="submit-btn">შესვლა</button>
                </form>
              </div>
              <div
                class="login__content login__content--2 login__content"
                data-tab="2"
              >
                <form class="modal__form">
                  <button type="submit" class="submit-btn">რეგისტრაცია</button>
                </form>
              </div>
            </div>
            <div class="flag__container">
              <img
                class="flag"
                src="https://zoommer.ge/icons/footer/flag-geo.png"
                alt="flag"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="navigation none">
        <div class="navigation__wrapper">
          <div class="navigation__container">
            <img
              class="burger-btn"
              src="https://zoommer.ge/icons/burger-icon.svg"
              alt="logo"
            />
            <img
              class="logo__img-1"
              src="https://zoommer.ge/icons/main-logo.svg"
              alt="logo"
            />
          </div>
          <div class="navigation__container">
            <img src="	https://zoommer.ge/icons/search.svg" alt="search-logo" />
            <img
              src="	https://zoommer.ge/icons/cart.svg
            "
              alt="cart-logo"
            />
            <img
              class="flag"
              src="https://zoommer.ge/icons/footer/flag-geo.png"
              alt="flag"
            />
          </div>
        </div>
      </div>
      <div class="side__navigation">
        <div class="side__menu hidden">
          <div class="side__navigation-header">
            <button class="side__menu-close">
              <img
                src="https://zoommer.ge/icons/burger-close.svg"
                alt="close btn"
              />
            </button>
            <div class="navigation__header-search">
              <div class="header-search__search">
                <a class="header-search__search-icon-link" href="#">
                  <img
                    class="header-search__icon"
                    src="https://zoommer.ge/icons/main-search.svg"
                    alt="Search Icon"
                  />
                </a>
                <input
                  class="header-search__input"
                  type="text"
                  name="q"
                  placeholder="ძიება"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="side__navigation-tabs">
            <nav class="side__navigation-nav">
              <ul id="categoryList" class="side__navigation-list"></ul>
            </nav>
            <div id="subcategoryWrapper" class="navigation__tab-wrapper"></div>
          </div>
        </div>
      </div>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }
  