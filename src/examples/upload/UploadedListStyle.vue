<title>已上传列表</title>

<desc>展现已上传的文件列表能让用户感知已经完成上传的文件有哪些，提升用户体验</desc>

<template>
    <article>
        <section class="section">
            <p class="section-header">text</p>
            <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                :default-file-list="defaultFileList"
                list-type="text"
            >
                <Button><Icon iconname="cloud-upload"></Icon>上传</Button>
            </Upload>
        </section>
        <section class="section">
            <p class="section-header">picture</p>
            <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                :default-file-list="defaultFileList"
                list-type="picture"
            >
                <Button><Icon iconname="cloud-upload"></Icon>上传</Button>
            </Upload>
        </section>
        <section class="section">
            <p class="section-header">picture-card</p>
            <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                :default-file-list="defaultFileList"
                list-Type="picture-card"
                :on-success="handleSuccess"
            >
                <Button><Icon iconname="cloud-upload"></Icon>上传</Button>
            </Upload>
        </section>
    </article>
</template>

<style lang="scss" scoped>
.section {
    margin-bottom: 20px;
}
.section-header {
    margin: 10px 0;
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
