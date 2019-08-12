<template>
    <Header>
        <a href="/" class="org-brand">
            <img
                class="org-brand-logo"
                alt="logo"
                src="../../assets/logo.png"
            />
            <span class="org-brand-title">ZOV UI</span>
        </a>
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
        <div class="org-nav">
            <Menu
                class="org-nav-menu"
                mode="horizontal"
                @on-change="handleNavChange"
            >
                <MenuOption name="0">首页</MenuOption>
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
.zov-layout-header {
    border-color: transparent;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.org-brand {
    height: 100%;
    display: flex;
    align-items: center;
    &-logo {
        width: 80px;
    }
    &-title {
        font-weight: bold;
        font-size: 18px;
        color: var(--color-title);
    }
}
.search-input {
    width: 300px;
    margin-left: 50px;
    border: none;
}
.org-nav {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &-menu {
        & > * {
            float: right;
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
                this.$store.commit('setDarkMode', isDark)
            },
            immediate: true
        }
    },
    methods: {
        handleSelect(e) {
            this.$router.push(e.text.toLowerCase() + '-doc')
        },
        handleNavChange(e) {
            if (e === '0') {
                this.$router.push('/')
            }
        }
    }
}
</script>
