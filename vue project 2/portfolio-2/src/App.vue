<template>
 <div>
  <navbar></navbar>
 <router-view></router-view>
  <foot></foot>
 </div>

</template>


<script>

  import Home from './components/Home'
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
  import About from "./components/About"
  import Contact from "./components/Contact";
  import Pricing from "./components/Pricing";

export default {
  components: {
    'home': Home,
    'navbar': Navbar,
    'foot': Footer,
    'about': About,
    'contact': Contact,
    'pricing': Pricing
  }
}
</script>

<style>

</style>
