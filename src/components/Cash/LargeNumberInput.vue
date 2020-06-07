<template>
  <input
    type="text"
    :value="cash"
    :style="inputClass"
    class="large-number-input"
    v-on:keyup="validate"
  />
</template>
<script>
export default {
  props: {
    fontSize: {
      type: Number,
      required: true,
      default: 1,
    },
    cash: {
      type: Number,
      required: true,
    },
  },

  computed: {
    inputClass() {
      return `height: ${this.fontSize * 2}px; font-size: ${this.fontSize}pt;`;
    },
  },

  methods: {
    validate(n) {
      var newValue = "";

      for (let i = 0; i < n.srcElement.value.length; i++) {
        newValue += isNaN(parseInt(n.srcElement.value[i])) ? '' : n.srcElement.value[i];
      }

      n.srcElement.value = newValue;
    },
  },
};
</script>
<style scoped>
.large-number-input {
  background-color: gray;
}
</style>
