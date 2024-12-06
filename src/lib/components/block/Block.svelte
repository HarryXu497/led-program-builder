<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();

    // function onChangeListener(event: Event) {
    //     if (!form) {
    //         return;
    //     }

    //     const values = []
        
    //     for (const input of form) {
    //         values.push((input as HTMLInputElement).value)
    //     }

    //     onChange(values)
    // }
</script>

<div class="code-block">
    <form>
        {@render children()}
    </form>
</div>

<style>
    .code-block {
        background-color: var(--color-code-block);
    }
</style>