<template>
  <div class="section top-section">
    <h2 class="title">Your Profile:</h2>
    <div class="columns header-columns">
      <div class="column">Dweller:</div>
      <div class="column">S.P.E.C.I.A.L.:</div>
      <div class="column">Exp.:</div>
      <div class="column">Projects.:</div>
      <div class="column">Good to know:</div>
      <div class="column">Citizen of:</div>
    </div>
    <div class="columns">
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
      <div class="column">{{user.projects}}</div>
      <div class="column">{{user.myth}}</div>
      <div class="column">{{user.home}}</div>
    </div>
    <img class="terminal-image" src="../assets/terminal.jpg" />
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: String
      //  profile: "{'name':'','fact':'','exp':0,'results':{'Strength':0,'Perception':1,'Endurance':4,'Charisma':0,'Intelligence':0,'Agility':0,'Luck':0}}"
    }
  },
  data() {
    return {
      user: JSON.parse(this.$route.params.profile)
    };
  }
};
</script>

<style lang="scss">
.header-columns {
  border-bottom: 1px solid;
  height: 35px;
}
.special-skill {
  .progress-wrapper {
    margin-bottom: -18px;
    width: 40px;
    height: 0px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    .progress {
      height: 9px;
    }
  }

  transform: rotate(-270deg);
  width: 0px;
}
.terminal-image{    
    width: 100%;
    position: absolute;
    top: 71px;
    opacity: 14%;
    height: 600px;
}
.top-section {
  padding-top: 0;
}
</style>