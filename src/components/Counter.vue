<template>
  <div class="container">
    <nav class="navbar">
      <router-link class="nav-links" to="/">Home </router-link>
      <router-link class="nav-links" to="/counter">Counter </router-link>
    </nav>
    <div class="content">
      <h1 class="counter">{{ count }}</h1>
      <span class="button-sect">
        <button class="bttn" @click="increment">+</button>
        <button class="bttn" @click="decrement">-</button>
        <button class="bttn" @click="reset">&#x27f3;</button>
      </span>
      <div class="setvalue">
        <input
          v-model.number="$store.state.inputValue"
          type="number"
          placeholder="Enter value"
        />
        <button @click="setValue" class="set">Set Value</button>
      </div>
    </div>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
export default {
  setup() {
    const { increment, decrement, reset, setValue, count } = useCounter();
    return { increment, decrement, reset, setValue, count };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  text-align: center;
  background-image: linear-gradient(to bottom right, #305170, #6DFC6B);
  /* background-image: linear-gradient(to bottom right, #576182, #1FC5A8); */
}

.navbar {
  height: 10vh;
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: flex-end;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
}

a {
  font-size: 2rem;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-links {
  font-weight: 500;
}

a:hover {
  color: turquoise;
  transition: ease-in-out 0.5s;
}
a:active {
  color: turquoise;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content {
  /* margin-top: 10%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.counter {
  animation: pulse 700ms ease-in-out;
  color: white;
  font-size: 8rem;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.button-sect {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bttn {
  border: none;
  font-size: 4rem;
  margin: 2rem;
  padding: 2rem;
  font-weight: bold;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  transition: background-color 250ms ease-in-out, transform 50ms ease-in-out;
}

button:active {
  transform: scale(1.2);
}

button:hover {
  background-color: teal;
}

input[type="number"] {
  width: 55%;
  padding: 12px 20px;
  box-sizing: border-box;
  margin: 8px 0;
  font-size: 20px;
  border-radius: 12px;
  border: none;
}

.set {
  cursor: pointer;
  border-radius: 15%;
  border: none;
  font-size: 1.5rem;
  margin: 2rem;
  padding: 2rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  transition: background-color 250ms ease-in-out, transform 50ms ease-in-out;
}
</style>