<template>
  <div class="quiz section">
    <b-steps
      size="is-small"
      type="is-success"
      v-model="activeStep"
      v-on:change="updateSkill"
      :animated="true"
      :has-navigation="true"
    >
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

    <div
      v-if="activeStep===(quiz.categories.length-1)"
      v-on:click="jumpToResult"
    >
      <b-button class="right-button" type="is-success" outlined>Result</b-button>
    </div>
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
      for (let index = 0; index < quiz.categories.length; index++) {
        const category = quiz.categories[index];

        var skill = category.skill;

        var skillValues = this.$refs["skill-" + skill];
        if (skillValues) {
          var data = skillValues[0].calc();
          this.results[skill] = data.points;
        }
      }
    },
    jumpToResult() {
      let resultString = JSON.stringify(this.results);
      this.$router.push({ path: "/result/" + resultString });
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

.quiz .step-navigation .pagination-next:before,
.quiz .step-navigation .pagination-previous:before {
  font-size: 2rem;
  position: absolute;
  color: #23d160;
  font-weight: bold;
}
.quiz .step-navigation .pagination-previous:before {
  content: "<";
}
.quiz .step-navigation .pagination-next:before {
  content: ">";
}
</style>