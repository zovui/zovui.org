<template>
    <BackgroundCanvas>
        <BackgroundSymbol symbol="L" color="red" bottom="30px" left="20%" />
        <BackgroundSymbol symbol="O" color="blue" bottom="30px" left="40%" />
        <BackgroundSymbol symbol="C" color="orange" bottom="30px" left="60%" />
        <BackgroundSymbol symbol="O" color="green" bottom="30px" left="80%" />
    </BackgroundCanvas>
</template>

<script>
import BackgroundCanvas from './BackgroundCanvas'
import BackgroundSymbol from './BackgroundSymbol'

export default {
    name: 'Background',
    components: {
        BackgroundCanvas,
        BackgroundSymbol
    }
}
</script>
