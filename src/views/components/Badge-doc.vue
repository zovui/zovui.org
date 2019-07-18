<template>
    <div>
        <article>
            <h1>Badge 徽标</h1>
            <div class="anchor">
                <h2 id="GS">概述</h2>
                <a href="#GS">#</a>
            </div>
            <p>
                主要用于通知未读数的角标，提醒用户点击。
            </p>
            <h2>代码示例</h2>
            <DemoBox
                title="基础用法"
                titleId="JCYF"
                desc="最简单的使用方法。"
                onlineHref="http://jsrun.net/IeyKp/edit"
                :demoCode="JCYF_code"
            >
                <div slot="demo">
                    <Badge :count="3">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </div>
            </DemoBox>
            <DemoBox
                title="小红点"
                titleId="JCYF"
                desc="这里有个小红点。"
                onlineHref="http://jsrun.net/IeyKp/edit"
                :demoCode="XHD_code"
            >
                <div slot="demo">
                    <Badge dot>
                        <Icon iconname="albums" />
                    </Badge>
                    <Badge dot>
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                    <Badge dot>
                        <a href="#">可以是一个链接</a>
                    </Badge>
                </div>
            </DemoBox>
            <DemoBox
                title="最大值"
                titleId="ZDZ"
                desc="通过设置overflow-count值，当超过时，显示{ overflow-count }。"
                onlineHref="http://jsrun.net/IeyKp/edit"
                :demoCode="ZDZ_code"
            >
                <div slot="demo">
                    <Badge :count="100">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                    <Badge :count="1000" overflow-count="999">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </div>
            </DemoBox>
            <DemoBox
                title="独立使用自定义样式"
                titleId="DLSY"
                desc="可以没有 slot 独立展示。"
                onlineHref="http://jsrun.net/IeyKp/edit"
                :demoCode="DLSY_code"
            >
                <div slot="demo">
                    <Badge :count="10"></Badge>
                    <Badge :count="20" class-name="demo-badge-alone"></Badge>
                </div>
            </DemoBox>
            <DemoBox
                title="自定义内容"
                titleId="ZDY"
                desc="设置 text 属性，可以自定义显示内容。"
                onlineHref="http://jsrun.net/IeyKp/edit"
                :demoCode="ZDY_code"
            >
                <div slot="demo">
                    <Badge text="new">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                    <Badge text="hot">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </div>
            </DemoBox>
        </article>
        <ul>
            <li>
                <Badge :count="3">
                    <a href="#" class="demo-badge"></a>
                </Badge>
            </li>
            <li>
                <span>
                    <Badge dot>
                        <Icon iconname="albums" />
                    </Badge>
                </span>
                <span>
                    <Badge dot>
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
                <span>
                    <Badge dot>
                        <a href="#">可以是一个链接</a>
                    </Badge>
                </span>
            </li>
            <li>
                <span>
                    <Badge :count="100">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
                <span>
                    <Badge :count="1000" overflow-count="999">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
            </li>
            <li>
                <span>
                    <Badge :count="10"></Badge>
                </span>
                <span>
                    <Badge :count="20" class-name="demo-badge-alone"></Badge>
                </span>
            </li>
            <li>
                <span>
                    <Badge text="new">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
                <span>
                    <Badge text="hot">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
            </li>
            <li>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warning" />
                <br />
                <Badge status="success" text="Success" />
                <br />
                <Badge status="error" text="Error" />
                <br />
                <Badge status="default" text="Default" />
                <br />
                <Badge status="processing" text="Processing" />
                <br />
                <Badge status="warning" text="Warning" />
            </li>
            <li>
                <span>
                    <Badge :count="5" type="primary">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
                <span>
                    <Badge :count="5" type="success">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
                <span>
                    <Badge :count="5" type="normal">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
                <span>
                    <Badge :count="5" type="info">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
                <span>
                    <Badge :count="5" type="error">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
                <span>
                    <Badge :count="5" type="warning">
                        <a href="#" class="demo-badge"></a>
                    </Badge>
                </span>
            </li>
        </ul>
        <table>
            <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>count</td>
                <td>
                    显示的数字，大于<code>overflowCount</code>时，显示<code>${overflowCount}+</code>，为
                    0 时隐藏
                </td>
                <td>Number</td>
                <td>-</td>
            </tr>
            <tr>
                <td>overflow-count</td>
                <td>展示封顶的数字值</td>
                <td>Number | String</td>
                <td>99</td>
            </tr>
            <tr>
                <td>dot</td>
                <td>
                    不展示数字，只有一个小红点，如需隐藏 dot
                    ，需要设置<code>count</code>为 0
                </td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>class-name</td>
                <td>自定义的class名称，dot 模式下无效</td>
                <td>String</td>
                <td>-</td>
            </tr>
            <tr>
                <td>type</td>
                <td>
                    使用预设的颜色，可选值为
                    success、primary、normal、error、warning、info
                </td>
                <td>String</td>
                <td>-</td>
            </tr>
            <tr>
                <td>show-zero</td>
                <td>当数值为 0 时，是否展示 Badge</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>status</td>
                <td>
                    设置 Badge 为状态点，可选值为
                    success、processing、default、error、warning
                </td>
                <td>String</td>
                <td>-</td>
            </tr>
            <tr>
                <td>text</td>
                <td>自定义内容，如果设置了 status，则为状态点的文本</td>
                <td>String</td>
                <td>-</td>
            </tr>
            <tr>
                <td>offset</td>
                <td>设置状态点的位置偏移，格式为 [x, y]</td>
                <td>Array</td>
                <td>-</td>
            </tr>
        </table>
    </div>
</template>
<script>
import DemoBox from '../../components/demo-box'
import Table from '../../components/table'
export default {
    components: {
        DemoBox,
        Table
    },
    data() {
        return {
            JCYF_code: `<template>
	<Badge :count="3">
		<a href="#" class="demo-badge"></a>
	</Badge>
</template>
<script>
	export default {

	}
<\/script>`,
            XHD_code: `<template>
<div>
	<Badge dot>
		<Icon iconname="albums" />
	</Badge>
	<Badge dot>
		<a href="#" class="demo-badge"></a>
	</Badge>
	<Badge dot>
		<a href="#">可以是一个链接</a>
	</Badge>
</div>
</template>
<script>
	export default {

	}
<\/script>`,
            ZDZ_code: `<template>
	<div>
		<Badge :count="100">
			<a href="#" class="demo-badge"></a>
		</Badge>
		<Badge :count="1000" overflow-count="999">
			<a href="#" class="demo-badge"></a>
		</Badge>
	</div>
</template>
<script>
	export default {

	}
<\/script>`,
            DLSY_code: `<template>
<div>
	<Badge :count="10"></Badge>
	<Badge :count="20" class-name="demo-badge-alone"></Badge>
</div>
</template>
<script>
	export default {

	}
<\/script>`,
            ZDY_code: `<template>
	<Badge text="new">
		<a href="#" class="demo-badge"></a>
	</Badge>
	<Badge text="hot">
		<a href="#" class="demo-badge"></a>
	</Badge>
</template>
<script>
	export default {

	}
<\/script>`
        }
    }
}
</script>
<style lang="scss" scoped>
ul {
    li {
        margin: 0 0 25px 0;

        span {
            display: inline-block;
            margin: 0 5px 0;
        }
    }
}

.demo-badge {
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;

    &-alone {
        background: #5cb85c !important;
    }
}

table {
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
    width: 100%;
    margin-bottom: 24px;

    th,
    td {
        border: 1px solid #e9e9e9;
        padding: 8px 16px;
        text-align: left;
    }
}
</style>
