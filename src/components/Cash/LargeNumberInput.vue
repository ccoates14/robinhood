<template>
  <v-container>
    <v-layout>
      <input
        type="text"
        :placeholder="cash"
        :style="inputClass"
        v-model="value"
        class="large-number-input"
        v-on:keyup="validate"
 
      />
      <v-btn
        color="primary"
        class="ml-5"
        @click="submit"
        min-width="200"
        min-height="75"
        >Submit</v-btn
      >
    </v-layout>
  </v-container>
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

  data() {
    return {
      value: this.cash
    }
  },

  methods: {
    validate(n) {
      var newValue = "";

      for (let i = 0; i < n.srcElement.value.length; i++) {
        newValue += isNaN(parseInt(n.srcElement.value[i]))
          ? ""
          : n.srcElement.value[i];
      }

      n.srcElement.value = newValue;
    },

    submit() {
      if (!Number.isNaN(this.value)){
        this.$emit('submit', parseInt(this.value));
      }
    }
  },
};
</script>
<style scoped>
.large-number-input {
  background-color: gray;
}
</style>
