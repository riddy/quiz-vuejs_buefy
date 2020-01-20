<template>
  <div>
    <h2>Thanks for your time!</h2>
    <p>Your most developed skill seems to be {{score().name}}.</p>

    <img :src="getImgUrl()" v-bind:alt="pic" />
    <div v-if="'Strength'===score().name">
      <p>
        You know about a strong backbone! Seems you be an outstanding
        backend expert!
      </p>
    </div>
    <div v-if="'Perception'===score().name">
      You have a greate awareness! You master the world of JavaScript
      frameworks to provide the best possible experience!
    </div>
    <div v-if="'Endurance'===score().name">
      You are a resilient type of person! Without DevOps no system will run
      and be updated in production in a way that let developers sleep well
      and customers trust the solution!
    </div>
    <div v-if="'Charisma'===score().name">
      Nobody can resist your charm! You are articulate both verbal and
      written, distribution of knowledge for you is as natural as asking for
      advice.
    </div>
    <div v-if="'Intelligence'===score().name">
      Wow, what a high IQ! Or is it the one of your artificial system?
      Either way, without mastering databases and big data we'll never
      provide additional features based on what we collect every day!
    </div>
    <div v-if="'Agility'===score().name">
      Scrum! But... nobody is perfect, but you adapt to changing
      requirements in a professional way, because agile dosen't mean 'no
      processes'. Keep fighting for the best delivered incerement possible!
    </div>
    <div v-if="'Luck'===score().name">
      Feeling lucky? You know that with a good team spirit, life is only
      half as bad. With SOLID, KISS and YAGNI in mind your future-self will
      be able to cope with whatever comes up.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
      default: "{Luck: 10}"
    }
  },
  methods: {
    // Return "true" count in userResponses
    score: function() {
      let mostDevelopedSkill = {
        name: "nothing. You're talentless. Try again",
        value: 0
      };
      let userResponses = JSON.parse(this.result);
      for (let [key, value] of Object.entries(userResponses)) {
        let skillLevel = parseInt(value);
        if (skillLevel > mostDevelopedSkill.value) {
          mostDevelopedSkill.name = key;
          mostDevelopedSkill.value = skillLevel;
        }
      }

      return mostDevelopedSkill;
    },
    getImgUrl: function() {
      return "./" + this.score().name + ".jpg";
    }
  }
};
</script>

<style>
</style>