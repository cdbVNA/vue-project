<template>
  <footer class="footer">
    <div class="footer-overlay">
      <div class="footer-top">
        <div class="footer-columns">
          <div class="column">
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/#biography">Биография</a></li>
              <li><a href="/#books">Книги</a></li>
              <li><a href="/illustrator">Иллюстраторы</a></li>
              <li><a href="/territory">Территория Внукова</a></li>
              <li><a href="/journal">Журналы и газеты</a></li>
              <li><a href="/kids">Детский раздел</a></li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li><a href="/contest/autor">Конкурс "Песни перьев"</a></li>
              <li><a href="/contest/drawing">Конкурс открыток</a></li>
              <li><a href="/about">О нас</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-logo">
          <div class="logo_cdb">
            <img src="~/assets/logo_cdb.png" alt="" />
          </div>
          <div class="logo_cbs">
            <img src="~/assets/logo_cbs.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-contacts">
        <p>пр. Просвещения, д. 36/141</p>
        <p>+7 (812) 246-93-12</p>
      </div>
      <div class="social-icons">
        <a href="mailto:spbcdb@cbsvib.ru" target="_blank" rel="noopener" aria-label="VK" class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
            style="fill: #ffffff">
            <path
              d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z">
            </path>
          </svg>
        </a>
        <a href="https://vk.com/spb_cdb" class="icon" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="#fff" width="24" height="24">
            <path
              d="M15.07294,2H8.9375C3.33331,2,2,3.33331,2,8.92706V15.0625C2,20.66663,3.32294,22,8.92706,22H15.0625C20.66669,22,22,20.67706,22,15.07288V8.9375C22,3.33331,20.67706,2,15.07294,2Zm3.07287,14.27081H16.6875c-.55206,0-.71875-.44793-1.70831-1.4375-.86463-.83331-1.22919-.9375-1.44794-.9375-.30206,0-.38544.08332-.38544.5v1.3125c0,.35419-.11456.5625-1.04162.5625a5.69214,5.69214,0,0,1-4.44794-2.66668A11.62611,11.62611,0,0,1,5.35419,8.77081c0-.21875.08331-.41668.5-.41668H7.3125c.375,0,.51044.16668.65625.55212.70831,2.08331,1.91669,3.89581,2.40625,3.89581.1875,0,.27081-.08331.27081-.55206V10.10413c-.0625-.97913-.58331-1.0625-.58331-1.41663a.36008.36008,0,0,1,.375-.33337h2.29169c.3125,0,.41662.15625.41662.53125v2.89587c0,.3125.13544.41663.22919.41663.1875,0,.33331-.10413.67706-.44788a11.99877,11.99877,0,0,0,1.79169-2.97919.62818.62818,0,0,1,.63544-.41668H17.9375c.4375,0,.53125.21875.4375.53125A18.20507,18.20507,0,0,1,16.41669,12.25c-.15625.23956-.21875.36456,0,.64581.14581.21875.65625.64582,1,1.05207a6.48553,6.48553,0,0,1,1.22912,1.70837C18.77081,16.0625,18.5625,16.27081,18.14581,16.27081Z" />
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-copy">Дизайн и разработка<br> ЦДБ им. Н.А. Внукова &copy; {{ currentYear }}</div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const currentYear = new Date().getFullYear()
    return { currentYear }
  },
}
</script>

<style scoped>
.footer {
  position: relative;
  margin-top: 100px;
  width: 100%;
  overflow: hidden;
  min-height: 250px;
  padding: 40px;
  background-color: rgb(141, 164, 182);
  box-shadow: 0px -9px 20px 0px rgba(0, 0, 0, 0.2);
}

.footer-top {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin-bottom: 30px;
  padding: 0 40px;
  margin: auto;
}


.footer-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  flex: 1 1 50%;
  min-width: 200px;
}

.column {
  min-width: 150px;
}

.column ul {
  list-style: none;
  font-family: 'Mulish';
}

.column a {
  display: block;
  color: #000;
  text-decoration: none;
  margin-bottom: 10px;
  font-family: 'Mulish', sans-serif;
  font-size: 1em;
  transition: color 0.3s, text-decoration 0.3s;
}

.column a:hover {
  color: #333;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.icon svg {
  width: 40px;
  height: 40px;
  fill: #fff;
  transition: fill 0.3s;
}

.footer-bottom {
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-family: 'Mulish', sans-serif;
  font-size: 0.9em;
  gap: 50px;
  color: #000;
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.footer-contacts p {
  font-size: 1em;
  margin: 0;
  padding: 5px;
}

.footer-logo {
  display: flex;
  gap: 40px;
  flex-direction: row;
}

.social-icons svg {
  width: 40px;
  height: 40px;
  fill: #fff;
  transition: fill 0.3s;
}


.logo_cdb,
.logo_cbs {
  max-width: 200px;
  height: auto;
}

.logo_cdb img,
.logo_cbs img {
  width: 100%;
}

.footer-copy {
  text-align: center;
  font-size: 0.9em;
  color: #000000;
  opacity: 0.8;
}

@media(max-width: 768px) {
  .container_title {
    padding-top: 40px;
  }

  .column {
    width: 200px;
  }

  .footer-top {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .footer-columns {
    justify-content: center;
    gap: 20px;
  }

  .footer-logo {
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .footer-contacts {
    align-items: center;
  }
}
@media(max-width: 482px) {
	  .footer-columns {
    gap: 0px;
  }
  .logo_cbs{
	flex: 1;
  }
    .logo_cdb{
	flex: 1;
  }
}
</style>