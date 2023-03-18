<template>
  <div class="home-container">
    <nav class="navbar">
      <router-link class="nav-links" to="/">Home </router-link>
      <router-link class="nav-links" to="/counter">Counter </router-link>
    </nav>
    <div class="home-contain">
      <div class="head">
        <h1 class="welcome">Welcome</h1>
        <h4>To my Counter App</h4>
        <div class="contain">
          <div class="box">+</div>
          <div class="box">-</div>
          <div class="box">&#x27f3;</div>
          <div class="box">0</div>
        </div>
        <div class="use">
          <router-link class="use" to="/counter">Go to Counter</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.home-contain {
  display: flex;
  flex-direction: column;
}

.use > a {
  text-decoration: none;
  font-size: 2.5rem;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 20%;
  width: 250px;
  height: 90px;
  background-color: black;
  border: 0.2rem solid black;
  outline: 0.2rem solid #3bb8d4;
  outline-offset: -5px;
}

.head {
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.contain {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.box {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
}

.box:first-child {
  background-image: linear-gradient(0deg, white, grey);
  animation: loader 5s infinite;
}

.box:nth-child(2) {
  background-image: linear-gradient(90deg, white, rgb(163, 159, 159));
  animation: loader 6s infinite;
}

.box:nth-child(3) {
  background-image: linear-gradient(180deg, white, rgb(163, 159, 159));
  animation: loader 7s infinite;
}

.box:last-child {
  background-image: linear-gradient(360deg, white, #9b9b9b);
  animation: loader 8s infinite;
}

@keyframes loader {
  0% {
    rotate: 0deg;
  }
  25% {
    rotate: y 90deg;
    scale: 0.5;
  }
  50% {
    rotate: 180deg;
  }
  75% {
    rotate: x 270deg;
    border-radius: 50%;
  }
  100% {
    rotate: 360deg;
  }
}

@supports not (rotate: 0deg) {
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: scale(0.5) rotateY(90deg);
    }
    50% {
      transfrom: rotate(180deg);
    }
    75% {
      transform: rotateX(270deg);
      border-radius: 50%;
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>