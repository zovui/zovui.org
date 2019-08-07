<template>
    <Sider v-model="collapsed" breakpoint="md" width="300">
        <Menu
            :thumbnail="collapsed"
            :active-name="menuActiveName"
            :open-names="['components']"
            :accordion="true"
        >
            <MenuOption
                v-for="(item, index) in $router.options.routes[1].children"
                :key="index"
                :name="item.path"
                @click="$router.push({ path: item.path })"
            >
                <Icon :iconname="item.routerOptions.iconname" thumbnail-icon />
                {{ item.routerOptions.disc }}
            </MenuOption>
            <MenuSub name="components">
                <template #title>
                    组件
                </template>
                <MenuGroup v-for="(i, index) in siderList" :key="index">
                    <span slot="title">
                        {{ i.groupName }}
                    </span>
                    <MenuOption
                        v-for="(j, index) in i.groupList"
                        :key="index"
                        :name="j.path"
                        @click="$router.push({ path: j.path })"
                    >
                        {{ j.disc }}
                    </MenuOption>
                </MenuGroup>
            </MenuSub>
        </Menu>
    </Sider>
</template>

<script>
export default {
    props: {
        menuActiveName: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            collapsed: false,
            siderList: [
                {
                    groupName: '基础',
                    groupList: [
                        {
                            disc: 'Button 按钮',
                            path: '/button-doc'
                        },
                        {
                            disc: 'Icon 图标',
                            path: '/icon-doc'
                        }
                    ]
                },
                {
                    groupName: '布局',
                    groupList: [
                        {
                            disc: 'Grid 栅格',
                            path: '/grid-doc'
                        },
                        {
                            disc: 'Layout 布局',
                            path: '/layout-doc'
                        },
                        {
                            disc: 'Divider 分割线',
                            path: '/divider-doc'
                        }
                    ]
                },
                {
                    groupName: '导航',
                    groupList: [
                        {
                            disc: 'Menu 导航菜单',
                            path: '/menu-doc'
                        },
                        {
                            disc: 'Tabs 标签页',
                            path: '/tabs-doc'
                        },
                        {
                            disc: 'Anchor 锚点',
                            path: '/anchor-doc'
                        },
                        {
                            disc: 'Badge 徽标数',
                            path: '/badge-doc'
                        },
                        {
                            disc: 'Breadcrumb 面包屑',
                            path: '/breadcrumb-doc'
                        },
                        {
                            disc: 'Drop 下拉菜单',
                            path: '/drop-doc'
                        },
                        {
                            disc: 'LoadingBar 加载进度条',
                            path: '/loadingbar-doc'
                        },
                        {
                            disc: 'Steps 步骤条',
                            path: '/steps-doc'
                        },
                        {
                            disc: 'Page 分页',
                            path: '/Page-doc'
                        }
                    ]
                },
                {
                    groupName: '表单',
                    groupList: [
                        {
                            disc: 'Input 输入框',
                            path: '/input-doc'
                        },
                        {
                            disc: 'Radio 单选框',
                            path: '/radio-doc'
                        },
                        {
                            disc: 'Cascader 级联选择',
                            path: '/cascader-doc'
                        },
                        {
                            disc: 'Select 选择器',
                            path: '/select-doc'
                        },
                        {
                            disc: 'Checkbox 多选框',
                            path: '/checkbox-doc'
                        },
                        {
                            disc: 'Switch 开关',
                            path: '/switch-doc'
                        },
                        {
                            disc: 'Slider 滑块',
                            path: '/slider-doc'
                        },
                        {
                            disc: 'DatePicker 日期选择器',
                            path: '/datepicker-doc'
                        },
                        {
                            disc: 'ColorPicker 颜色选择器',
                            path: '/colorpicker-doc'
                        },
                        {
                            disc: 'TimePicker 时间选择器',
                            path: '/timepicker-doc'
                        },
                        {
                            disc: 'Upload 上传',
                            path: '/upload-doc'
                        }
                    ]
                },
                {
                    groupName: '视图',
                    groupList: [
                        {
                            disc: 'Avatar 头像',
                            path: '/avatar-doc'
                        },
                        {
                            disc: 'Message 全局提示',
                            path: '/message-doc'
                        },
                        {
                            disc: 'Notice 通知提醒',
                            path: '/notice-doc'
                        },
                        {
                            disc: 'Modal 对话框',
                            path: '/modal-doc'
                        },
                        {
                            disc: 'Popper 气泡',
                            path: '/popper-doc'
                        },
                        {
                            disc: 'ToolTip 气泡提示',
                            path: '/tooltip-doc'
                        },
                        {
                            disc: 'Progress 进度条',
                            path: '/progress-doc'
                        },
                        {
                            disc: 'Tag 标签',
                            path: '/tag-doc'
                        },
                        {
                            disc: 'Timeline 时间轴',
                            path: '/Timeline-doc'
                        }
                    ]
                },
                {
                    groupName: '其它',
                    groupList: [
                        {
                            disc: 'Affix 图钉',
                            path: '/affix-doc'
                        },
                        {
                            disc: 'BackTop 返回顶部',
                            path: '/backtop-doc'
                        },
                        {
                            disc: 'Spin 加载中',
                            path: '/spin-doc'
                        },
                        {
                            disc: 'LongList 无限滚动',
                            path: '/longlist-doc'
                        },
                        {
                            disc: 'BigDataList 长列表',
                            path: '/bigdatalist-doc'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
