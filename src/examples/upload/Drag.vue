<title>拖拽上传</title>

<desc>交互中拖拽是一项非常常见的操作，在许多应用中内容能提升用户体验，上传文件时更是如此。</desc>

<template>
    <Upload
        action="//jsonplaceholder.typicode.com/posts/"
        :default-file-list="defaultFileList"
        list-Type="text"
        type="drag"
    >
        <div class="drag-upload-demo-container">
            <Icon class="drag-upload-demo-icon" iconname="cloud-upload"></Icon>
            <p class="drag-upload-text">
                将文件拖到此处，或
                <span class="drag-upload-demo-strong">点击上传</span>
            </p>
        </div>
    </Upload>
</template>

<style>
.drag-upload-demo-container {
    border: 1px dashed #e4e4e4;
    text-align: center;
    border-radius: 4px;
    height: 100px;
    padding: 20px;
}
.drag-upload-demo-icon {
    font-size: 30px;
    color: #2d8cf0;
}
.drag-upload-demo-strong {
    color: #2d8cf0;
}
</style>

<script>
export default {
    data() {
        return {
            defaultFileList: [
                {
                    name: 'xxxx.jpg',
                    url:
                        'https://cn.bing.com/th?id=OHR.Manhattanhenge_ZH-CN4659585143_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
                },
                {
                    name: 'yyyyyyyy.jpeg',
                    url:
                        'https://camo.githubusercontent.com/a4ee422ec1accc811276f220561976f14005b13b/687474703a2f2f7a6f762e7468657068656e69782e636e2f696d672f6c6f676f2e35313134623463362e706e67'
                },
                {
                    name: 'zzzzzzzzzzzz.jpeg',
                    url: ''
                }
            ]
        }
    }
}
</script>
