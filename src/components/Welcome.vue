<template>
  <div class="welcome">
    <p>
      Tell us about yourself! We need to know what kind of developer you are.
    </p>
    <router-link to="/quiz">
    <img class="quiz-link" src="../assets/special.png" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.welcome {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 16 pt;
  margin-top: 40px;
}
.quiz-link {
  display: block;
  width: 800px;
  height: 595px;
  margin-left: auto;
  margin-right: auto;
}
</style>