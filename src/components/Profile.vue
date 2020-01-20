<template>
  <div>
    <h2 class="title">Your Profile:</h2>
    <div class="columns section">
      <div class="column">Name:</div>
      <div class="column">Strength:</div>
      <div class="column">Exp.:</div>
      <div class="column">Good to know:</div>
    </div>
    <div class="columns section">
      <div class="column">{{user.name}}</div>
      <div class="column">
        <div class="special-skill">
          <b-progress type="is-success" :value="user.results.Strength*7"></b-progress>
          <b-progress type="is-success" :value="user.results.Perception*7"></b-progress>
          <b-progress type="is-success" :value="user.results.Endurance*7"></b-progress>
          <b-progress type="is-success" :value="user.results.Charisma*7"></b-progress>
          <b-progress type="is-success" :value="user.results.Intelligence*7"></b-progress>
          <b-progress type="is-success" :value="user.results.Agility*7"></b-progress>
          <b-progress type="is-success" :value="user.results.Luck*7"></b-progress>
        </div>
      </div>
      <div class="column">{{user.exp}}</div>
      <div class="column">{{user.fact}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //  profile: "{'name':'','fact':'','exp':0,'results':{'Strength':0,'Perception':1,'Endurance':4,'Charisma':0,'Intelligence':0,'Agility':0,'Luck':0}}"
  },
  data() {
    return {
      user: JSON.parse(this.$route.params.profile)
    };
  }
};
</script>

<style lang="scss">
.special-skill {
  .progress-wrapper {
    margin-bottom: 0.5rem;
    width: 140px;
    width: 140px;
    margin-top: -50px;
    transform: rotate(180deg);
  }
  transform: rotate(-270deg);
  margin: 0;
  padding: 0;
  margin-left: -352px;
  margin-top: 305px;
}
</style>