<title>禁用</title>

<desc>
    给TabPane指定disabled，可禁用某tab。
</desc>

<template>
    <Tabs>
        <TabPane label="Tab1" id="1" :disabled="true">Content of tab 1</TabPane>
        <TabPane label="Tab2" id="2">Content of tab 2</TabPane>
        <TabPane label="Tab3" id="3">Content of tab 3</TabPane>
    </Tabs>
</template>
