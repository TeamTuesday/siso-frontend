<script lang="ts">
  import {voteSubjects} from '@/store';

  export let vote = async (type: string) => {
    await voteSubjects.postVote({id, type});
  };
  export let id = '';
  export let title = 'no-title';
  export let agree_description = '';
  export let disagree_description = '';
</script>

<div class="flex flex-col items-center justify-center flex-1 pt-4 pb-2">
  <span
    class="w-max px-3 py-[2px] h-[22px] text-center text-white text-xs mb-[6px] rounded-[20px] bg-[rgba(255,255,255,0.3)] border border-[rgba(85,85,85,0.3)]"
    >라이프</span
  >
  <h3 class="text-2xl text-white text-center mb-[17px] w-[320px]">{title}</h3>
  <button class="mb-3 vote-btn" on:click={() => vote('agree')}
    >{agree_description}</button
  >
  <button class="vote-btn" on:click={() => vote('disagress')}
    >{disagree_description}</button
  >
</div>

<style lang="scss">
  .vote-btn {
    @apply w-full h-[150px] flex justify-center items-center bg-[rgba(255,255,255,0.75)] shadow-[0_0_20px_4px_rgba(0,0,0,0.06)]
  rounded-[15px] text-lg text-[#222222] font-bold px-[29px];
  }
</style>
