<template>
    <div class="contain">
      <el-card>
        <div class="upload1">
          <p>element ui上传组件：</p>
           <el-upload
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :auto-upload="false"
            :limit="2"
            :data="formData"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="onSuccess"
            :on-error="onError">
            <i class="el-icon-plus"></i>
            </el-upload>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <el-button type="primary" style="margin-top:10px;" @click="submit">开始上传</el-button>
        </div>

         <div class="upload2"></div>
          </el-card>
    </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import { message } from "@/utils/util.js";
export default {
  name: "uploadTest",
  components: {
    VueCropper
  },
  data: function() {
    return {
      // element ui start
      dialogImageUrl: "",
      dialogVisible: false,
      formData: {},
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
      // element ui end
    };
  },
  created() {},
  methods: {
    // element ui start
    //删除
    handleRemove(file, fileList) {},
    // 放大
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submit() {
      // this.formData = {
      //   name: "xxx"
      // };
      this.$refs.upload.submit();
    },
    onSuccess(response, file, fileList) {
      message("上传成功", "success");
      console.log(response, file, fileList);
    },
    onError(err, file, fileList) {
      message("上传失败", "error");
      console.log(err, file, fileList);
    }
    // element ui end
  }
};
</script>

<style scoped>
</style>