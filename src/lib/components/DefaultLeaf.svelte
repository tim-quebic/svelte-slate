<svelte:options immutable />

<script lang="ts">
	import type { Text } from 'slate';

	export let leaf: Text;
</script>

<span data-slate-leaf="true"><slot /></span>
