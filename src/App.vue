<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  *
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body
  {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
