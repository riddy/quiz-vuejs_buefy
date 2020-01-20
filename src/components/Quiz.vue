<template>
  <div class="quiz">
    <b-steps type="is-success" v-model="activeStep" :animated="true" :has-navigation="true">
      <b-step-item label :clickable="false" v-for="(category, idx) in quiz.categories" :key="idx">
        <question-set
          :ref="'skill-' + category.skill"
          :skill="category.skill"
          :title="category.title"
          :questions="category.questions"
          @update-skill="updateSkill"
        />
      </b-step-item>
    </b-steps>

    <div class="result-link" v-if="activeStep===6" v-on:click="jumpToResult">Result..</div>
  </div>
</template>

<script>
import quiz from "../questions.js";
import QuestionSet from "./QuestionSet";
export default {
  name: "quiz",
  components: {
    "question-set": QuestionSet
  },
  data() {
    return {
      quiz: quiz,
      activeStep: 0,
      results: {
        Strength: 0,
        Perception: 0,
        Endurance: 0,
        Charisma: 0,
        Intelligence: 0,
        Agility: 0,
        Luck: 0
      }
    };
  },
  methods: {
    updateSkill() {
      // this.$refs["skill-Charisma"][0].calc()

      this.results[this.data.skill] = this.data.points;
    },
    jumpToResult() {
      let resultString = JSON.stringify(this.results);
      this.$router.push({ path: "/result/" + resultString });
      // return this.$route
    }
  },
  watch: {
    activeStep() {
      return "";
    }
  }
};
</script>

<style>
.result-link {
  color: #23d160 !important;
  font-family: monospace;
  margin-top: -42px;
  display: block;
  height: 40px;
  margin-right: 80px;
  margin-left: auto;
  text-align: right;
  width: 99px;
  font-weight: bold;
  border: 2px solid grey;
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
}
.step-navigation {
  margin-left: 80px;
  margin-right: 80px;
}
.label {
  font-size: 1.3rem;
}
.b-slider-tick-label {
  font-size: 1rem !important;
}
</style>