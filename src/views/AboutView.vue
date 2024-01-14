<template>
  <video-background src="bg.mp4" class="AboutView" autoplay muted loop>
    <div class="AboutView__content">
      <p class="AboutView__contact__text">¡Hola! soy Enxing.</p>
      <p class="AboutView__contact__text">
        Actualmente me encuentro en una emocionante etapa de mi vida, inmersa en mi formación en
        arte dramático en la ESAD de Málaga.
      </p>
      <p class="AboutView__contact__text">
        Desde temprana edad, he encontrado en el mundo creativo un camino para explorar el poder de
        la imagen y desarrollar mi creatividad. Mi recorrido incluye experiencia como
        <b>modelo de fotografía</b> y participación en <b>spots comerciales</b>. Además de mi faceta
        como modelo, la danza y la acrobacia son mi pasión, añadiendo una dimensión adicional a mi
        expresión artística.
      </p>
      <p class="AboutView__contact__text">
        Siempre estoy en búsqueda de la excelencia, participando en cursos y masterclass que me
        permiten crecer como profesional. Te invito a explorar mi trabajo y a acompañarme en este
        <span class="AboutView__contact__link">
          <RouterLink to="/portfolio"> ✨emocionante viaje creativo✨ </RouterLink>
        </span>
      </p>

      <div class="AboutView__contact">
        <p class="AboutView__contact__text">Puedes encontrarme en</p>
        <div class="AboutView__socialmedia">
          <a
            href="https://www.instagram.com/ensi_sb02"
            target="_blank"
            rel="noopener"
            class="AboutView__icon instagram"
          ></a>
          <a
            href="https://www.facebook.com/Nxingsb02"
            target="_blank"
            rel="noopener"
            class="AboutView__icon facebook"
          ></a>
        </div>
      </div>
    </div>
  </video-background>
</template>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.AboutView {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $color__white;

  &__content {
    padding: 2rem;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      padding: 1rem 0;
      line-height: 1.5rem;
      text-align: left;
    }
    &__link {
      display: inline-block;
      padding-top: 0.8rem;
      width: 100%;
      text-align: center;

      a {
        font-size: 1.3rem;
        transition: 300ms ease;
        &:hover, &:active, &:focus {
          letter-spacing: 2px;
        }
      }
    }
  }

  &__socialmedia {
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__icon {
    width: 2rem;
    height: 2rem;

    &.instagram {
      background: url('@/assets/social-media/instagram.png') no-repeat;
      background-position: center;
      background-size: contain;
    }

    &.whatsapp {
      background: url('@/assets/social-media/whatsapp.png') no-repeat;
      background-position: center;
      background-size: contain;
    }

    &.facebook {
      background: url('@/assets/social-media/facebook.png') no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
}

@media (min-width: 1024px) {
  .AboutView {
    &__content {
      padding: 15%;
    }

    &__socialmedia {
      max-width: 35%;
    }
  }
}
</style>
