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
      </VanCellGroup>
    </VanForm>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const fields = ref({
  username: "",
  password: "",
});
</script>

<style lang="scss" scoped></style>
