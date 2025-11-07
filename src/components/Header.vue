
<template>
  <div class="menu">
    <div v-if="isMenuOpen" class="overlay" @click="closeMenu"></div>
    <div :class="['top-menu', { 'main-page': isHomePage, 'other-page': !isHomePage }]">
      <div class="logo-container">
        <router-link to="/">
          <img src="/src/assets/logo.png" alt="Логотип" class="logo" />
        </router-link>
      </div>
      <div class="top-menu_right">
        <!-- Якорные ссылки на главной -->
        <div v-if="isHomePage" class="anchors" :class="{ hidden: isMenuOpen }">
          <a href="#biography" @click="closeMenu">Биография</a>
          <a href="#books" @click="closeMenu">Книги</a>
        </div>

        <div class="burger" @click="toggleMenu">
          <div :class="{ line: true, active: isMenuOpen }"></div>
          <div :class="{ line: true, active: isMenuOpen }"></div>
          <div :class="{ line: true, active: isMenuOpen }"></div>
        </div>
      </div>
    </div>

    <!-- Бургер -->
    <div class="burger-menu" :class="{ open: isMenuOpen }" @click.self="closeMenu">
      <div class="menu-content">
        <ul class="content_text">
          <li>
            <a href="/" @click="closeMenu"><div>Главная</div></a>
          </li>
          <li>
            <button @click="toggleGallery" class="has-submenu">Биография ↓</button>
            <div>
              <ul v-if="isGalleryOpen" class="submenu" role="menu" aria-label="Биография">
                <li v-for="(photo, index) in photos" :key="index" role="menuitem">
                  <a :href="photo.link" class="photos" @click="closeMenu" :aria-label="photo.title">{{ photo.title }}</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/journal" @click.native="closeMenu"><div>Журналы и газеты</div></a>
          </li>
          <li>
            <button @click="toggleBooks" class="has-submenu">Книги ↓</button>
            <ul v-if="isBooksOpen" class="submenu" role="menu" aria-label="Книги">
              <li v-for="(book, index) in books" :key="index" role="menuitem">
                <a :href="book.link" class="books" @click="closeMenu" :aria-label="book.title">{{ book.title }}</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/illustrator" @click.native="closeMenu">
              <div>Иллюстраторы</div>
            </a>
          </li>
          <li>
            <button @click="toggleContests" class="has-submenu">Конкурсы ↓</button>
            <ul v-if="isContestsOpen" class="submenu">
              <li><a href="/contest/autor" @click.native="closeMenu">Конкурс «Песни Перьев» </a></li>
              <li><a href="/contest/drawing" @click.native="closeMenu">Конкурс рисунков</a></li>
            </ul>
          </li>
          <li>
            <a href="/territory" @click.native="closeMenu">
              <div>Территория Внукова</div>
            </a>
          </li>
          <li>
            <a href="/about" @click.native="closeMenu"> <div>О нас</div></a>
          </li>
          <li>
            <a href="/kids" @click.native="closeMenu"><div>Детский раздел</div></a>
          </li>
          <li>
            <a href="/contacts" @click.native="closeMenu">
              <div>Контакты</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import books from '@/books.js'
import photos from '@/photos.js'

export default {
  setup() {
    const route = useRoute()
    const isHomePage = computed(() => route.path === '/')
    const isMenuOpen = ref(false)
    const isGalleryOpen = ref(false)
    const isBooksOpen = ref(false)
    const isContestsOpen = ref(false)

const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    const closeMenu = () => {
      isMenuOpen.value = false
      isGalleryOpen.value = false
      isBooksOpen.value = false
      isContestsOpen.value = false
    }
    const toggleGallery = () => {
      isGalleryOpen.value = !isGalleryOpen.value
    }
    const toggleBooks = () => {
      isBooksOpen.value = !isBooksOpen.value
    }
    const toggleContests = () => {
      isContestsOpen.value = !isContestsOpen.value
    }
    return {
      isHomePage,
      isMenuOpen,
      isGalleryOpen,
      isBooksOpen,
      isContestsOpen,
      toggleMenu,
      closeMenu,
      toggleGallery,
      toggleBooks,
      toggleContests,
      books,
      photos,
    }
  },
}
</script>

<style scoped>
.menu {
  position: sticky; top: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(141, 164, 182, 0.8);
  margin: 0 auto;
  z-index: 999;
  transition: background-color 0.3s;
  -webkit-box-shadow: 0px 9px 20px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 9px 20px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 9px 20px 0px rgba(0, 0, 0, 0.2);
}

.top-menu {
  justify-content: space-between;
  padding: 0 40px;
}
.top-menu,
.top-menu_right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
.top-menu_right.main-page {
  justify-content: flex-end;
  gap: 30px;
  padding: 10px 30px;
}
.top-menu_right.other-page {
  padding: 0px 30px;
  justify-content: space-between;
}
/* Логотип */
.logo-container {
  margin-top: 5px;
  max-width: 180px;
}

.logo {
  width: 100%;
  height: auto;
}
/* Якорные ссылки */
.anchors {
  display: flex;
  flex-direction: row;
  z-index: 1000;
  gap: 10px;
  transition: opacity 0.3s, transform 0.3s;
}

.anchors.hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-20px);
}

.anchors a {
  font-size: 1.2em;
  color: #000000a5;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
}

.anchors a:hover {
  color: #000;
}

/* Бургер */
.burger {
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  z-index: 1000;
}

.line {
  height: 3px;
  background-color: #000;
  transition: 0.3s;
}

.line.active:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.line.active:nth-child(2) {
  opacity: 0;
}

.line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Меню */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 995;
  transition: transform 0.5s;
}

.burger-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background: rgb(141, 164, 182);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 998;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.burger-menu.open {
  transform: translateX(0);
}
.menu-content {
  overflow-y: auto;
  flex: 1;
}
.menu-content::-webkit-scrollbar {
  width: 0px;
}
.content_text {
  list-style: none;
  padding: 30px 0;
  margin: 0;
}
.content_text a,
.content_text button {
  display: block;
  width: 100%;
  font-size: 1.3em;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Vollkorn', serif;
  font-weight: 500;
  color: #000;
  transition: background 0.3s;
}
.content_text a:hover,
.content_text button:hover {
  background: rgba(0, 0, 0, 0.05);
}
.has-submenu {
  cursor: pointer;
  position: relative;
}
.submenu {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  transition: max-height 0.3s ease;
}
.submenu li {
  padding: 0px 12px;
  font-size: 1em;
  border-radius: 4px;
  background: rgb(141, 164, 182);
}
li .books,
li .photos {
  font-size: 1em;
  padding: 5px;
}
@media (min-width: 480px) and (max-width: 768px) {
}

@media screen and (max-width: 482px) {
  .menu {
    width: 100%;
    height: 40px;
  }
  .top-menu {
    padding: 0px 10px;
  }
  .logo-container {
    max-width: 100px;
  }
  /* Скрываем якорные ссылки на мобильных */
  .anchors {
    display: none;
  }
  /* Бургер */
  .burger {
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .line {
    height: 2px;
    background-color: #000;
    transition: 0.3s;
  }
  .line.active:nth-child(1) {
    transform: rotate(45deg) translate(3px, 3px);
  }
  .line.active:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  /* Меню */
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: transform 0.5s;
  }
  .burger-menu {
    width: 100%;
    height: 100%;
    background: rgb(141, 164, 182);
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    padding: 20px;
  }
.submenu {
  margin-left: 5px;
}
}
</style>