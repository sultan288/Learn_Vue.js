<template>
  <div>
     <navbar></navbar>
     <router-view></router-view>
     <myfooter></myfooter>
  </div>
</template>


<script>
  import Home from "./components/Home";
  import Navbar from "./components/Navbar";
  import Footer from "./components/footer";
  import Contact from "./components/Contact";
  import Pricing from "./components/Pricing";
  import Faq from "./components/Faq";


  export default {
    components: {
      'navbar': Navbar,
      'myfooter': Footer,
      'home': Home,
      'contact': Contact,
      'pricing': Pricing,
      'faq': Faq
    }
  }

</script>

<style>

</style>
