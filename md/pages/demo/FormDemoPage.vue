<template>
  <div class="md-demo-form-demo-page">
    <VanForm>
      <VanCellGroup inset>
        <VanField
          v-model="fields.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <VanField
          v-model="fields.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <VanField
          v-model="fields.phone"
          type="password"
          name="手机"
          label="手机"
          placeholder="手机"
          :rules="[{ required: true, message: '请填写手机' }]"
        />
        <VanField
          v-model="fields.captcha"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          center
          clearable
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <VanButton size="small" type="primary" plain>发送验证码</VanButton>
          </template>
        </VanField>
        <VanField
          v-model="fields.content"
          type="textarea"
          name="内容"
          label="内容"
          placeholder="内容"
          rows="2"
          autosize
          maxlength="50"
          show-word-limit
        />
      </VanCellGroup>
    </VanForm>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const fields = ref({
  username: "",
  password: "",
  phone: "",
  captcha: "",
  content: "",
});
</script>

<style lang="scss" scoped>
.md-demo-form-demo-page {
  flex-grow: 1;
  padding-top: 1em;
  background-color: #f7f8fa;
}
</style>
