<script setup>
import HelloWorld from './components/HelloWorld.vue'
import CompanyIntro from './components/CompanyIntro.vue'
</script>

<template>
  <div class="app-container">
    <div class="logo-container">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <CompanyIntro />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.logo-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@media (max-width: 768px) {
  .app-container {
    padding: 1rem;
  }
  
  .logo {
    height: 4em;
    padding: 1em;
  }
}
</style>
