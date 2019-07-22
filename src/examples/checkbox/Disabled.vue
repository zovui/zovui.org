<title>禁用选项</title>

<desc>设置disabled，来禁用全部或者部分选项，禁用状态在许多表单交互里非常常见</desc>

<template>
    <article>
        <section>
            <h3>禁用单个选项</h3>
            <Checkbox :indeterminate="true" disabled>A</Checkbox>
        </section>
        <section>
            <h3>禁用部分选项</h3>
            <CheckboxGroup v-model="list">
                <Checkbox label="A"></Checkbox>
                <Checkbox label="B" disabled></Checkbox>
                <Checkbox label="C"></Checkbox>
            </CheckboxGroup>
        </section>
        <section>
            <h3>禁用全部选项</h3>
            <CheckboxGroup v-model="list" disabled>
                <Checkbox label="A"></Checkbox>
                <Checkbox label="B"></Checkbox>
                <Checkbox label="C"></Checkbox>
            </CheckboxGroup>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            list: ['A', 'B']
        }
    }
}
</script>
