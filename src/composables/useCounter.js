import { computed } from "vue";
import { useStore } from "vuex";

const useCounter = () => {
  const store = useStore();
  const count = computed(() => store.state.count);

  const increment = () => {
    store.dispatch("increment");
  };

  const decrement = () => {
    store.dispatch("decrement");
  };
  const reset = () => {
    store.dispatch("reset");
  };
  const setValue = () => {
    store.dispatch("setValue");
  };
  return { increment, decrement, reset, setValue, count };
};

export default useCounter;
