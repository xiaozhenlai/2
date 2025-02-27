```shell
# python>=3.9.7
# 需要node>=20.0.0
# docker镜像:mongo:7.0
# 以下配置 process.env
# 在根目录下配置.env

# JWT_SECRET_DOCTOR 医生jwt配置
# mongoURL MongoDB数据库
# API_KEY 谷歌AI API key
# ALLOWED_ORIGINS 允许通过的origin
# PORT 端口
# JWT_SECRET 用户jwt配置
# NODE_ENV 是否开发环境
# APP_PASSWORD 谷歌邮箱密码
# APP_EMAIL 谷歌邮箱
```
```javascript
// 配置前端项目跨域
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 4000,
        proxy: {
            '/ai': {
                target: 'http://localhost:6000',
                changeOrigin: true,
            },
            '/api/user': {
                target: 'http://localhost:6000',
                changeOrigin: true,
            },
            '/api/doctor': {
                target: 'http://localhost:6000',
                changeOrigin: true,
            },
            '/uploads':{
                target: 'http://localhost:6000',
                changeOrigin: true,
            },
            '/api/predict':{
                target: 'http://localhost:2000',
                changeOrigin: true,
            },
            '/api/get-disease':{
                target: 'http://localhost:2000',
                changeOrigin: true,
            }
        },
    },
})
```
```shell
# 项目启动端口
# Backend:6000
# Frontend/Frontend_For_MedGuide_User:3000
# Frontend/MedGuide-Project-For-Doctor:10000
# Frontend/MedGuide-Project-For-User:4000
# Python:2000
```
