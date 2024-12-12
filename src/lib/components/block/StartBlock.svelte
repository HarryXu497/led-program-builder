<script lang="ts">
	import Block from './Block.svelte';
</script>

<Block
	--color-code-block="var(--color-bg-1)"
	--color-code-block-light="var(--color-bg-1-light)"
	--color-code-block-dark="var(--color-bg-1-dark)"
>
	<p>Start<i class="ri-snowflake-line"></i></p>
</Block>

<style>
	p {
		font-family: 'Jetbrains Mono', monospace;
		font-size: 2rem;
		font-weight: bold;
		display: flex;
		flex-direction: row;
		gap: 0.75rem;
		align-items: center;
	}

	i {
		font-size: 1.75rem;
	}
</style>
