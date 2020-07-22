<template>
  <div class="form-area">
    <div class="form-wrap">
      <div class="form-label">社員番号</div>
      <div class="form-input">
        <input type="text" v-model="form.employeeNumber" />
      </div>
    </div>
    <div class="form-wrap">
      <div class="form-label">参加種別</div>
      <div class="fornm-radio">
        <div class="select-area">
          <input
            type="radio"
            name="participation"
            id="participation-1"
            value="1"
            v-model="form.participationType"
          />
          <label for="participation-1">発表者</label>
        </div>
        <div class="select-area">
          <input
            type="radio"
            name="Participation"
            id="Participation-2"
            value="2"
            v-model="form.participationType"
          />
          <label for="participation-2">参加のみ</label>
        </div>
      </div>
    </div>
    <div class="form-wrap">
      <div class="form-label">氏名</div>
      <div class="form-input">
        <input type="text" v-model="form.name" />
      </div>
    </div>
    <div class="form-wrap">
      <div class="form-label">LT大会に期待すること</div>
      <div class="form-input">
        <textarea name id cols="30" rows="3" v-model="form.expect"></textarea>
      </div>
    </div>
    <div class="form-wrap save-area">
      <div>
        <button class="btn-save">登録</button>
      </div>
      <div>
        <button class="btn-clear">クリア</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

export interface FormModel {
  employeeNumber: string;
  participationType: number;
  name: string;
  expect: string;
}

@Component
export default class DetailComponent extends Vue {
  form: FormModel = {
    employeeNumber: "",
    participationType: 2,
    name: "",
    expect: ""
  };
}
</script>

<style scoped>
.form-area {
  margin: 10px auto;
  width: 80%;
  box-shadow: 4px 4px 4px 3px gray;
  padding: 1em 0;
  border-radius: 5px;
}

.form-wrap {
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 10px auto;
  vertical-align: middle;
  margin: 5px auto;
}

.form-label {
  margin: auto 10px;
  text-align: right;
}
.save-area {
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
}

.btn-save,
.btn-clear {
  padding: 10px 20px;
  color: #ffffff;
  border: 0;
}

.btn-save {
  background-color: #6adef6;
}
.btn-clear {
  background-color: #f89c72;
}

.btn-save:focus,
.btn-save:hover,
.btn-clear:focus,
.btn-clear:hover {
  color: rgba(255, 255, 255, 10);
}

.btn-save:focus,
.btn-save:hover {
  background-color: #42c6e0;
}

.btn-clear:focus,
.btn-clear:hover {
  background-color: #cb5c2a;
}

.form-input {
  margin: auto;
  width: 100%;
  text-align: left;
}

.fornm-radio {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.select-area {
  text-align: left;
}
</style>
