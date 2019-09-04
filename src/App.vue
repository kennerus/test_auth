<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
  }

  #app, button, textarea, input {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'PT Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5;
    color: #2c3e50;
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .base {
    &-main-content {
      max-width: 900px;
      margin: 0 auto;
    }

    &-title {
      text-align: center;
    }

    &-input {
      width: 100%;
      box-sizing: border-box;
      margin-top: 5px;
      padding: 15px;

      border: 1px solid lightgray;
      border-radius: 3px;

      &-wrap {
        box-sizing: border-box;
        margin-top: 20px;
      }

      &-wrap:first-child {
        margin-top: 0;
      }
    }
  }
</style>
