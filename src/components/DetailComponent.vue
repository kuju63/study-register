<template>
  <div class="center">
    <div class="content">
      <div>LT大会の詳細を記載する</div>
      <div class="center">
        <table class="time-schedule">
          <thead>
            <tr>
              <th>時間</th>
              <th>タイトル</th>
              <th>担当者</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19:00〜</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>19:10〜</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DetailComponent extends Vue {}
</script>

<style scoped>
div.center {
  margin: auto;
  width: 80vw;
}
div.content {
  box-shadow: 4px 4px 4px 3px gray;
  padding: 1em;
  border-radius: 5px;
}

.time-schedule {
  margin: 1rem auto;
  width: 60%;
}
tr > th,
tr > td {
  border-bottom: 1px solid gray;
}
</style>
