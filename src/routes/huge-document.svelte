<script lang="ts" context="module">
	export const prerender = true;

	import { LoremIpsum } from 'lorem-ipsum';

	const lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	});

	function createValue(headings: number, paragraph: number) {
		const value: Array<IText | IElement> = [];

		for (let h = 0; h < headings; h++) {
			value.push({
				type: 'heading-one',
				children: [{ text: lorem.generateSentences(1) }]
			});

			for (let p = 0; p < paragraph; p++) {
				value.push({
					type: 'paragraph',
					children: [{ text: lorem.generateParagraphs(1) }]
				});
			}
		}

		return value;
	}

	const HOTKEYS = {
		'mod+b': 'bold',
		'mod+i': 'italic',
		'mod+u': 'underline',
		'mod+`': 'code'
	};
</script>

<script lang="ts">
	import { Slate, Editable, withSvelte, isHotkey } from 'svelte-slate';
	import { createEditor } from 'slate';
	import { withHistory } from 'slate-history';
	import type { IElement } from '../example/Element.svelte';
	import type { IText } from '../example/Leaf.svelte';
	import Element from '../example/Element.svelte';
	import Leaf from '../example/Leaf.svelte';
	import { withImages } from '../example/ImageElement.svelte';
	import ImageButton from '../example/ImageButton.svelte';
	import { toggleMark } from '../example/utils';
	import MarkButton from '../example/MarkButton.svelte';
	import BlockButton from '../example/BlockButton.svelte';
	import MdFormatBold from 'svelte-icons/md/MdFormatBold.svelte';
	import MdCode from 'svelte-icons/md/MdCode.svelte';
	import MdLooksOne from 'svelte-icons/md/MdLooksOne.svelte';
	import MdLooksTwo from 'svelte-icons/md/MdLooksTwo.svelte';
	import MdFormatItalic from 'svelte-icons/md/MdFormatItalic.svelte';
	import MdFormatUnderlined from 'svelte-icons/md/MdFormatUnderlined.svelte';
	import MdFormatListNumbered from 'svelte-icons/md/MdFormatListNumbered.svelte';
	import MdFormatListBulleted from 'svelte-icons/md/MdFormatListBulleted.svelte';
	import MdFormatQuote from 'svelte-icons/md/MdFormatQuote.svelte';

	const editor = withHistory(withImages(withSvelte(createEditor())));
	let value = createValue(100, 7);

	function onKeyDown(event: KeyboardEvent) {
		for (const hotkey in HOTKEYS) {
			if (isHotkey(hotkey, event)) {
				event.preventDefault();
				const mark = HOTKEYS[hotkey];
				toggleMark(editor, mark);
			}
		}
	}
</script>

<p>
	<a
		target="_blank"
		href="https://github.com/nathanfaucett/svelte-slate/blob/main/src/routes/huge-document.svelte"
		>Source</a
	>
</p>

<Slate {editor} bind:value>
	<div class="toolbar">
		<MarkButton format="bold"><MdFormatBold /></MarkButton>
		<MarkButton format="italic"><MdFormatItalic /></MarkButton>
		<MarkButton format="underline"><MdFormatUnderlined /></MarkButton>
		<MarkButton format="code"><MdCode /></MarkButton>
		<BlockButton format="heading-one"><MdLooksOne /></BlockButton>
		<BlockButton format="heading-two"><MdLooksTwo /></BlockButton>
		<BlockButton format="block-quote"><MdFormatQuote /></BlockButton>
		<BlockButton format="numbered-list"><MdFormatListNumbered /></BlockButton>
		<BlockButton format="bulleted-list"><MdFormatListBulleted /></BlockButton>
		<ImageButton />
	</div>
	<div class="editor">
		<Editable {Element} {Leaf} {onKeyDown} placeholder="Enter some plain text..." />
	</div>
</Slate>

<style>
	.toolbar {
		border-bottom: 1px solid #888;
		padding: 0.25rem 0;
	}
	.editor {
		padding: 0.25rem 0;
	}
</style>
