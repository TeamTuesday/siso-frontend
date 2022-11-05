<script lang="ts">
  import Button_cancel from '@/components/common/button/Button_cancel.svelte';
  import Button_ok from '@/components/common/button/Button_ok.svelte';

  export let text: string;
</script>

<div class="w-[300px] pt-9 px-[22px] pb-5 bg-white rounded-[10px]">
  <p class="font-medium leading-[22px] text-center">{text}</p>
  <div class="w-full mt-[30px] mr-[30px] flex gap-x-4">
    <Button_cancel class="flex-1" />
    <Button_ok class="flex-1" />
  </div>
</div>
