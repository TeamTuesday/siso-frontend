<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  export let list: {text: string; color: string; onClick: () => void}[];

  const _color = (item: {text: string; color: string; onClick: () => void}) => {
    switch (item.color) {
      case 'red':
        return 'text-[#FF7B52]';
      default:
        return 'text-[#222222]';
    }
  };

  const onClick = (item: {
    text: string;
    color: string;
    onClick: () => void;
  }) => {
    if (item.onClick) {
      item.onClick();
    }
    dispatch('close');
  };
</script>

<ul class="w-full rounded-lg bg-white">
  {#each list as item, index}
    <li>
      <button
        class="{index !== 0 && 'border-t border-[#D6D6D8]'} {_color(
          item
        )} w-full px-4 leading-[50px] text-left"
        data-index={index}
        on:click={onClick(item)}>{item.text}</button
      >
    </li>
  {/each}
</ul>
