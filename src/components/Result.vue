<template>
  <div class="section top-section">
    <div class="columns">
      <div class="column">
        <h2>Thanks for your time! Your most developed skill seems to be '{{score().name}}'.</h2>
        <br />
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

      <div class="column is-one-quarter">
        <img :src="getImgUrl()" class="clickable-img" />
      </div>
    </div>
    <hr />
    <div class="custom-inputs">
      <h2>You can create your profile now, please fill in the following to do so and then click the button</h2>
      <div class="columns">
        <div class="column">
          <b-field label="Name" type="is-success">
            <b-input minlength="2" maxlength="18" placeholder="Your Name"></b-input>
          </b-field>
          <b-field label="Experience" type="is-success">
            <b-input
              v-model="profile.exp"
              type="number"
              min="0"
              max="50"
              placeholder="Years of Experience"
            ></b-input>
          </b-field>
          <b-field label="Projects" type="is-success">
            <b-input minlength="2" maxlength="30" placeholder="Project(s) you are working on"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Myth (or Fact)" type="is-success">
            <b-input
              v-model.trim="profile.myth"
              minlength="8"
              maxlength="60"
              placeholder="Something people tell about you"
            ></b-input>
          </b-field>
          <b-field label="Home Base" v-model.trim="profile.home" type="is-success">
            <b-input minlength="6" maxlength="11" placeholder="Project(s) you are working on"></b-input>
          </b-field>
          <b-button
            v-on:click="jumpToProfile"
            class="right-button"
            type="is-success"
            outlined
          >Finish profile generation</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
      default: '{"Luck": 0}'
    }
  },
  data() {
    return {
      profile: {
        name: "",
        myth: "",
        exp: 0,
        home: "",
        results: {
          Strength: 0,
          Perception: 0,
          Endurance: 0,
          Charisma: 0,
          Intelligence: 0,
          Agility: 0,
          Luck: 0
        }
      }
    };
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
        this.profile.results = userResponses;
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
    },
    jumpToProfile() {
      let profileString = JSON.stringify(this.profile);
      this.$router.push({ path: "/profile/" + profileString });
    }
  }
};
</script>

<style lang="scss">
.custom-inputs {
  padding-top: 0;
}
.custom-inputs .field .label {
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 1rem;
  font-weight: normal;
}
.custom-input .control {
  height: 35px;
}
.right-button {
  float: right;
}
.top-section {
  padding-top: 0;
}

.clickable-img {
  cursor: pointer;
}
</style>