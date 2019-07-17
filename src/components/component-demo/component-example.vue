<script>
    import DemoBox from '../demo-box';
    export default {
        name: "component-example",
        props: {
            example: {
                type: Object,
                required: true
            }
        },
        render(h) {
            const example = this.example;
            return (
                <DemoBox
                    title={example.__title}
                    desc={example.__desc}
                    demoCode={example.__sourceCode}
                >
                    <div slot="demo">
                        {h(example)}
                    </div>
                </DemoBox>
            )
        }
    }
</script>
