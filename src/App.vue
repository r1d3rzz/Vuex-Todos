<template>
  <div class="container">
    <nav>
      <router-link :to="{ name: 'home' }">Todos</router-link> |
      <router-link :to="{ name: 'addTodo' }">Add New Todo</router-link>
    </nav>

    <div class="mt-3">
      <NavBar />
    </div>

    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  components: { NavBar },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* router-link-active router-link-exact-active */

nav a {
  text-decoration: none;
  color: #2c3e50;
  padding: 5px;
  border-radius: 5px;
}

nav a:hover {
  color: inherit;
}

nav a.router-link-exact-active {
  color: #41d983;
}
</style>
