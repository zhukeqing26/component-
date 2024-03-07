import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/types/auto-import.d.ts", // 路径下自动生成文件夹存放全局指令
    }),
    Components({
      resolvers: [
        //这里配置解析器，具体参数官网有解释
      ],
      dts: "src/types/components.d.ts",
    }),
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  }
});
