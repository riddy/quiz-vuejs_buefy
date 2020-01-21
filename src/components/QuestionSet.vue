<template>
  <div class="question-set">
    <h2 class="title">{{title}}</h2>

    <b-field :label="question" v-for="(question, idx) in questions" :key="idx">
      <b-slider
        type="is-success"
        :min="0"
        :max="5"
        :aria-label="question"
        :tooltip="false"
        v-model="results[idx]"
      >
        <b-slider-tick :value="0">Nope</b-slider-tick>
        <b-slider-tick :value="1"></b-slider-tick>
        <b-slider-tick :value="2"></b-slider-tick>
        <b-slider-tick :value="3"></b-slider-tick>
        <b-slider-tick :value="4"></b-slider-tick>
        <b-slider-tick :value="5">Pro</b-slider-tick>
      </b-slider>
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    skill: String,
    questions: Array,
    title: String
  },
  data() {
    return {
      results: {
        "0": 0,
        "1": 0,
        "2": 0
      }
    };
  },
  methods: {
    calc() {
      var prop,
        sum = 0;
      for (prop in this.results) {
        if (prop) {
          sum += this.results[prop];
        }
      }

      return {
        skill: this.skill,
        points: sum
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.quiz {
  // margin-top: 80;
}
.label {
  margin-top: 100;
}
.title {
  font-weight: bold;
  text-align: center;
}

nav.step-navigation,
.question-set {
  margin-left: 80px;
  margin-right: 80px;
}
</style>
