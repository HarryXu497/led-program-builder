<script lang="ts">
	import Block from './Block.svelte';
</script>

<Block
	--color-code-block="hsl(0, 0%, 30%)"
	--color-code-block-light="hsl(0, 0%, 40%)"
	--color-code-block-dark="hsl(0, 0%, 20%)"
>
	<p>Start</p>
</Block>

<style>
	p {
		font-family: 'Jetbrains Mono', monospace;
		font-size: 2rem;
		font-weight: bold;
	}
</style>
