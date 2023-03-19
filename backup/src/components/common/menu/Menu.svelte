<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  const dispatch = createEventDispatcher();

  export let menu: Module.Imenu[];

  const _color = (item: Module.Imenu) => {
    switch (item.color) {
      case 'red':
        return 'text-emphasis';
      default:
        return 'text-darkGray';
    }
  };

  const onClick = (item: Module.Imenu) => {
    if (item.onClick) {
      item.onClick();
    }
    dispatch('close');
  };
</script>

<ul class="w-full rounded-lg bg-white">
  {#each menu as item, index}
    <li>
      <button
        class="{index !== 0 && 'border-t border-[#D6D6D8]'} {_color(
          item
        )} w-full px-4 leading-5xl text-left"
        data-index={index}
        on:click={() => {
          onClick(item);
        }}>{item.text}</button
      >
    </li>
  {/each}
</ul>
