<template>
  <div class="flex flex-col min-h-screen bg-black">

    <Header/>

    <div>
      <main role="main" class="w-full">
        <nuxt/>
      </main>
    </div>

    <Footer/>
  </div>
</template>
<script>
import Footer from "@/layouts/organisms/Footer";
import Header from "@/layouts/organisms/Header";

export default {
  components: {Footer, Header}
}
</script>
