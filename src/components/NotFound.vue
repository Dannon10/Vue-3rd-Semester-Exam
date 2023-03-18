<template>
  <div className="error-404">
    <h1>&#10060; &#128721;</h1>
    <h1>Error 404</h1>
    <h2>Page Not Found!</h2>
    <div class="use">
      <router-link to="/">Go back Home</router-link>
    </div>
  </div>
</template>

<style>
.error-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.error-404 > a {
  text-decoration: none;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 20%;
  width: 200px;
  height: 60px;
  background-color: black;
  border: 0.2rem solid black;
  outline: 0.2rem solid #3bb8d4;
  outline-offset: -5px;
}

.error-404 > h1,
h2 {
  font-size: 5rem;
}
</style>