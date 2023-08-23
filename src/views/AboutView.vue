<template>
  <div class="AboutView">
    <p class="AboutView__contact__text">¡Hola! soy Enxing.</p>
    <p class="AboutView__contact__text">
      Actualmente me encuentro en una emocionante etapa de mi vida, inmersa en mi formación en artes
      escénicas en la ESAD de Málaga.
    </p>
    <p class="AboutView__contact__text">
      Desde temprana edad, he descubierto en la expresión artística un camino para conectar con mi
      creatividad y explorar el poder de la imagen. Mi recorrido incluye experiencia como
      <b>modelo de fotografía</b> y participación en <b>spots comerciales</b>. Además de mi faceta
      como modelo, la danza y la acrobacia son mi pasión, agregando una dimensión adicional a mi
      expresión artística.
    </p>
    <p class="AboutView__contact__text">
      Siempre estoy en búsqueda de la excelencia, participando en cursos y masterclass que me
      permiten crecer como profesional. Te invito a explorar mi trabajo y a acompañarme en este
      emocionante viaje creativo.
    </p>
    <div class="AboutView__contact">
      <p class="AboutView__contact__text">Puedes encontrarme en</p>
      <div class="AboutView__socialmedia">
        <a href="#" target="_blank" rel="noopener" class="AboutView__icon instagram"></a>
        <a href="#" target="_blank" rel="noopener" class="AboutView__icon whatsapp"></a>
        <a href="#" target="_blank" rel="noopener" class="AboutView__icon facebook"></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.AboutView {
  background: linear-gradient(-45deg, #FF008E, #D22779, #612897, #0C1E7F);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 1.5rem;
  color: #fff;

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      padding: 1rem 0;
      line-height: 1.5rem;
      text-align: left;
    }
  }

  &__socialmedia {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
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
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
