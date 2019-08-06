<template>
    <Header class="org-layout-header">
        <a href="/" class="org-layout-header-logo">
            <img alt="logo" src="../../assets/logo.png" />
        </a>
        <div class="org-layout-header-title">ZOV UI</div>
        <Select
            class="search-input"
            placeholder="搜索组件"
            :data="selectData"
            v-model="selectValue"
            prefix="search"
            width="300"
            value-name="id"
            label-name="text"
            :filterable="true"
            @on-change="handleSelect"
        >
            <div slot-scope="{ props }">
                {{ props.item.text }}
            </div>
        </Select>
        <div class="org-layout-header-nav">
            <Menu
                class="nav-box"
                mode="horizontal"
                style="width: auto;"
                @on-change="handleNavChange"
            >
                <MenuOption name="0">首页</MenuOption>
                <MenuOption name="1">组件</MenuOption>
                <MenuOption name="2">生态</MenuOption>
            </Menu>
            <Switcher
                class="org-layout-header-theme-btn"
                v-model="isDark"
                size="small"
            >
                <template slot="open">
                    <Icon iconname="moon"></Icon>
                </template>
                <template slot="close">
                    <Icon iconname="sunny"></Icon>
                </template>
            </Switcher>
        </div>
    </Header>
</template>

<style lang="scss" scoped>
.org-layout-header {
    border-color: transparent;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &-logo {
        width: 80px;
        height: 100%;
        img {
            height: 100%;
        }
    }
    &-title {
        height: 100%;
        font-weight: bold;
        font-size: 18px;
    }
    .search-input {
        width: 300px;
        margin-left: 50px;
        border: none;
    }
    &-nav {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .nav-box {
            float: right;
            a {
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            selectValue: '',
            isDark: localStorage.getItem('zov-theme') === 'dark'
        }
    },
    computed: {
        selectData() {
            let arr = []
            this.$router.options.routes[2].children.map((i, j) =>
                arr.push({
                    id: j,
                    text: i.routerOptions.discEn
                })
            )
            return arr
        }
    },
    watch: {
        isDark: {
            handler(isDark) {
                isDark
                    ? this.$Dark.open(() => {
                          localStorage.setItem('zov-theme', 'dark')
                      })
                    : this.$Dark.close(() => {
                          localStorage.setItem('zov-theme', '')
                      })
            },
            immediate: true
        }
    },
    methods: {
        handleSelect(e) {
            this.$router.push(e.text.toLowerCase() + '-doc')
        },
        handleNavChange(e) {
            switch (e) {
                case '0':
                    this.$router.push('/')
                    break
                case '1':
                    this.$router.push('/install')
                    break
                default:
            }
        }
    }
}
</script>
