import {defineConfig} from "vite";
import solidPlugin from "vite-plugin-solid";
import checker from "vite-plugin-checker";

declare const __dirname:string;

export default defineConfig({
    root:`${__dirname}/web/html`,
    mode:"development",
    envDir:`${__dirname}/viteenv`,

    plugins:[
        solidPlugin(),
        checker({
            typescript:{
                // tsconfigPath:"tsconfig.vite.json"
            }
        })
    ],

    resolve:{
        alias:{
            components:`${__dirname}/web/components`,
            lib:`${__dirname}/web/lib`,
            css:`${__dirname}/web/css`,
            apis:`${__dirname}/web/apis`,
            hooks:`${__dirname}/web/hooks`,
            store:`${__dirname}/web/store`,
            assets:`${__dirname}/web/assets`,
            pages:`${__dirname}/web/pages`,
        }
    },

    server:{
        port:4000,
        hmr:false
    },

    build:{
        outDir:`${__dirname}/build`,
        target:["esnext"],
        emptyOutDir:true,
        sourcemap:true,
        minify:false,

        rollupOptions:{
            input:{
                querypage:`web/html/index.html`
            }
        },

        watch:{
            buildDelay:1500
        }
    }
});