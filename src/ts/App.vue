<template>
  <el-container>
    <el-main>
      <el-row>
        <el-button type="primary">参加登録</el-button>
      </el-row>
      <el-row>
        <el-col :span="4">参加種別</el-col>
        <el-col :span="20">
          <el-row>
            <el-col :span="6">
              <el-radio label="1" border>発表しないけど参加したい</el-radio>
            </el-col>
            <el-col :span="6">
              <el-radio label="2" border>発表したい</el-radio>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">氏名</el-col>
        <el-col :span="20">
          <el-input placeholder="Please input your name"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">メールアドレス</el-col>
        <el-col :span="18">
          <el-input type="email"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">分野</el-col>
        <el-col :span="18">
          <el-row>
            <el-col :span="6">
              <el-radio label="1" border>ME</el-radio>
            </el-col>
            <el-col :span="6">
              <el-radio label="2" border>EL</el-radio>
            </el-col>
            <el-col :span="6">
              <el-radio label="3" border>MS</el-radio>
            </el-col>
            <el-col :span="6">
              <el-radio label="4" border>IT</el-radio>
            </el-col>
            <el-col :span="6">
              <el-radio label="5" border>CH</el-radio>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-col :span="8">
                  <el-radio label="6" border>その他</el-radio>
                </el-col>
                <el-col :span="12" v-if="isSelectOther">
                  <el-input placeholder="その他を選択時は入力してください"></el-input>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="4">
          <el-button type="primary">登録</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="danger">クリア</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>