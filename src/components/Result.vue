<template>
  <div>
    <h2>Thanks for your time!</h2>
    <hr />
    <img :src="getImgUrl()" />
    <p>Your most developed skill seems to be '{{score().name}}'.</p>

    <div v-if="'Strength'===score().name">
      <p>Also known as 'Servers' or 'Backend'.</p>
      <p>
        You know about a strong backbone! Seems you be an outstanding
        backend expert!
      </p>
    </div>
    <div v-if="'Perception'===score().name">
      <p>Also known as 'Presentation' or 'Frontend'.</p>
      <p>
        You have a greate awareness! You master the world of JavaScript
        frameworks to provide the best possible experience!
      </p>
    </div>
    <div v-if="'Endurance'===score().name">
      <p>Also known as 'Ensure Production' or 'DevOps'.</p>
      <p>
        You are a resilient type of person! Without DevOps no system will run
        and be updated in production in a way that let developers sleep well
        and customers trust the solution!
      </p>
    </div>
    <div v-if="'Charisma'===score().name">
      <p>Also known as 'Communication' or 'Knowledge Sharing'.</p>
      <p>
        Nobody can resist your charm! You are articulate both verbal and
        written, distribution of knowledge for you is as natural as asking for
        advice.
      </p>
    </div>
    <div v-if="'Intelligence'===score().name">
      <p>Also known as 'Intelligence, artificial' or 'Data Analysis' (or 'Databases' in general).</p>
      <p>
        Wow, what a high IQ! Or is it the one of your artificial system?
        Either way, without mastering databases and big data we'll never
        provide additional features based on what we collect every day!
      </p>
    </div>
    <div v-if="'Agility'===score().name">
      <p>Also known as 'Agile'.</p>
      <p>
        Scrum! But... nobody is perfect, but you adapt to changing
        requirements in a professional way, because agile dosen't mean 'no
        processes'. Keep fighting for the best delivered incerement possible!
      </p>
    </div>
    <div v-if="'Luck'===score().name">
      <p>Also known as 'Lighthearted' or 'Team Spirit'.</p>
      <p>
        Feeling lucky? You know that with a good team spirit, life is only
        half as bad. With SOLID, KISS and YAGNI in mind your future-self will
        be able to cope with whatever comes up.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
      default: '{"Luck": 10}'
    }
  },
  methods: {
    // Return "true" count in userResponses
    score: function() {
      let mostDevelopedSkill = {
        name: "nothing'. You're talentless. Can't believe that, try again!",
        value: 0
      };
      let userResponses;
      try {
        userResponses = JSON.parse(this.$route.params.result);
      } catch (e) {
        userResponses = { Luck: 10 };
      }
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
      let images = require.context("../assets/", false, /\.jpg$/);
      let skill = this.score().name;
      if (
        skill === "nothing'. You're talentless. Can't believe that, try again!"
      ) {
        return images("./special.jpg");
      }
      return images("./" + skill + ".jpg");
    }
  }
};
</script>

<style>
</style>