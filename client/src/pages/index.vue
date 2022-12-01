<template>
  <div>
    <div class="container mx-auto mt-10 text-white">
      <div class="relative h-[400px]">
        <img src="/img/ufo.gif" alt="ufo" class="ufo" width="400" height="257"/>
      </div>

      <div class="text-center">
        <h1 v-if="selectedLanguage">{{ selectedLanguage.greeting }}</h1>
        <h4 v-if="selectedLanguage" class="mt-5">{{ selectedLanguage.lang }}</h4>

        <div class="mt-14">
          <img src="/img/earth.png" alt="earth" class="mx-auto"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@keyframes backandforth {
  0% {
    top: 0;
    left: 0;
  }
  10% {
    top: 100px;
  }
  20% {
    top: 0;
  }
  30% {
    top: 100px;
  }
  40% {
    top: 0;
  }
  50% {
    top: 100px;
    left: calc(100% - 400px);
  }
  60% {
    top: 0;
  }
  70% {
    top: 100px;
  }
  80% {
    top: 0;
  }
  90% {
    top: 100px;
  }
  100% {
    top: 0;
    left: 0;
  }
}

.ufo {
  position: absolute;
  animation-name: backandforth;
  animation-duration: 6s;
  animation-iteration-count: infinite;

}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      selectedLanguage:  {
        lang: 'English',
        greeting: '\tHello World!',
      },
      languages: [
        {
          lang: 'Arabic',
          greeting: '\tمرحبا بالعالم!',
        },
        {
          lang: 'Albanian',
          greeting: '\tPërshendetje Botë!',
        },
        {
          lang: 'Afrikaans',
          greeting: '\tHello Wêreld!',
        },
        {
          lang: 'Armenia',
          greeting: '\tԲարեւ աշխարհ!',
        },
        {
          lang: 'Bengali',
          greeting: '\tওহে বিশ্ব!',
        },
        {
          lang: 'Bulgarian',
          greeting: '\tЗдравей свят!',
        },
        {
          lang: 'Catalan',
          greeting: '\tHola món!',
        },
        {
          lang: 'Chinese',
          greeting: '\t你好世界！',
        },
        {
          lang: 'Croatian',
          greeting: '\tPozdrav svijete!',
        },
        {
          lang: 'Danish',
          greeting: '\tHej Verden!',
        },
        {
          lang: 'English',
          greeting: '\tHello World!',
        },
        {
          lang: 'Finnish',
          greeting: '\tHei maailma!',
        },
        {
          lang: 'French',
          greeting: '\tBonjour monde!',
        },
        {
          lang: 'Georgian',
          greeting: 'გამარჯობა მსოფლიო!',
        },
        {
          lang: 'German',
          greeting: '\tHallo Welt!',
        },
        {
          lang: 'Greek',
          greeting: '\tΓειά σου Κόσμε!',
        },
        {
          lang: 'Hindi',
          greeting: '\tनमस्ते दुनिया!',
        },
        {
          lang: 'Icelandic',
          greeting: '\tHalló heimur!',
        },
        {
          lang: 'Indonesian',
          greeting: '\tHalo Dunia!',
        },
        {
          lang: 'Italian',
          greeting: '\tCiao mondo!',
        },
        {
          lang: 'Japanese',
          greeting: '\tこんにちは世界！',
        },
        {
          lang: 'Macedonian',
          greeting: '\tЗдраво свету!',
        },
        {
          lang: 'Norwegian',
          greeting: '\tHei Verden!',
        },
        {
          lang: 'Polish',
          greeting: '\tWitaj świecie!',
        },
        {
          lang: 'Romanian',
          greeting: '\tSalut Lume!',
        },
        {
          lang: 'Swedish',
          greeting: '\tHej världen!',
        },
        {
          lang: 'Ukrainian',
          greeting: '\tПривіт Світ!',
        }
      ]
    }
  },
  created() {
    setInterval(() => {
      this.selectedLanguage = this.languages[Math.floor(Math.random() * this.languages.length)];
    }, 1000)
  }
}
</script>
