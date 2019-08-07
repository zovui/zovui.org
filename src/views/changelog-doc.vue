<template>
    <Document header="Changelog" disabled-anchor>
        <Timeline>
            <TimelineItem v-for="node of data" :key="node.version">
                <p class="node-version">版本：{{ node.version }}</p>
                <p class="node-date">发布日期：{{ node.date }}</p>
                <template v-if="node.events.length">
                    <div v-for="event of node.events" class="node-event">
                        <p class="node-event-name">{{ event.name }}</p>
                        <ul
                            v-if="event.eventList.length"
                            class="node-event-list"
                        >
                            <li
                                v-for="eventNode of event.eventList"
                                v-html="eventNode"
                            ></li>
                        </ul>
                    </div>
                </template>
            </TimelineItem>
        </Timeline>
    </Document>
</template>

<style lang="scss" scoped>
.node-version {
    margin-right: 25px;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}
.node-date {
    font-size: 16px;
    margin-bottom: 10px;
}
.node-event {
    margin-bottom: 20px;
    &-name {
        font-size: 18px;
        font-weight: bold;
        margin: 10px 0;
    }
    &-list {
        font-size: 16px;
        list-style: circle;
        padding-left: 25px;
    }
}
</style>

<script>
import marked from 'marked'
import { Document } from '@/components'

const changelogOrigin =
    'https://raw.githubusercontent.com/zovui/zov/master/CHANGELOG.md'

function isVersionSeparator(element) {
    return /^\d+-\d+-\d+-\d+$/.test(element.id)
}

function parseVersion(element) {
    const matched = /\d+\.\d+\.\d+/.exec(element.textContent)
    let version = ''
    if (matched) {
        version = matched[0]
    }
    return version
}

function parseDate(element) {
    const matched = /^\d+-(\d+-\d+-\d+)$/.exec(element.id)
    if (matched) {
        return matched[1]
    }
    return ''
}

export default {
    components: { Document },
    routerOptions: {
        order: 4,
        disc: '更新日志',
        iconname: 'bug'
    },
    mounted() {
        this.genChangelog()
    },
    data() {
        return {
            data: []
        }
    },
    methods: {
        // 拉取changelog markdown
        async fetchChangelog() {
            return await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(xhr.responseText)
                        }
                    }
                }
                xhr.onerror = function() {
                    reject(xhr.statusText)
                }
                xhr.open('get', changelogOrigin, true)
                xhr.send(null)
            })
        },
        // 解析changelog markdown
        async parseChangelogMarkdown(markdownText) {
            const fragment = window.document.createElement('div')
            fragment.innerHTML = marked(markdownText)
            const children = Array.from(fragment.children)
            const groups = []
            children.forEach(element => {
                if (isVersionSeparator(element) && !(element.id in groups)) {
                    groups.push({
                        version: parseVersion(element),
                        date: parseDate(element),
                        events: []
                    })
                    return
                }
                const group = groups[groups.length - 1]
                if (element.nodeName.toLocaleLowerCase() === 'h3') {
                    group.events.push({
                        name: element.textContent,
                        eventList: []
                    })
                    return
                }
                if (element.nodeName.toLocaleLowerCase() === 'ul') {
                    const event = group.events[group.events.length - 1]
                    event.eventList = Array.from(element.children).map(el => {
                        return el.innerHTML
                    })
                }
            })
            return groups
        },
        // 生成changelog
        async genChangelog() {
            const changelogText = await this.fetchChangelog()
            this.data = await this.parseChangelogMarkdown(changelogText)
        }
    }
}
</script>
