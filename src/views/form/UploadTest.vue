<template>
    <div class="uploadTest">
        <div class="upload1">
           <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>

         <div class="upload2"></div>
    </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
export default {
  name: "uploadTest",
  components: {
    VueCropper
  },
  data: function() {
    return {};
  },

  methods: {},
  created() {}
};
</script>

<style scoped>
</style>