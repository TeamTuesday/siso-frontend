<script lang="ts">
  import {voteStore, voteType} from '@/store/voteStore';
  import {voteSubjectStore} from '@/store/voteSubjectStore';
  import Countup from 'svelte-countup';
  import { bounceOut } from 'svelte/easing';

  /** 투표하기*/
  export let vote = async (type: voteType) => {
    try {
      await voteStore.postVote({subjectId: id, type});
    } finally {
      voteSubjectStore.subscribe(datas => {
        voteResult = datas.voteSubject;
        agreePercent = Math.floor(
          (voteResult.voteAgreeCount / voteResult.voteCount) * 100
        );
        agreeStep = Math.floor(voteResult.voteAgreeCount / 100);
        agreeGuage = 320 * agreePercent / 100;
        disagreePercent = Math.floor(
          (voteResult.voteDisagreeCount / voteResult.voteCount) * 100
        );
        disagreeStep = Math.floor(voteResult.voteDisagreeCount / 100);
        disagreeGuage = 320 * disagreePercent / 100;
      });
      votedType = type;
      setTimeout(() => {
        changed = true;
      }, 1500);
    }
  };
  /** 테스트용 리셋 */
  export let reset = async () => {
    votedType = null;
    await voteStore.resetVote();
  };
  export let id = '';
  export let title = 'no-title';
  export let agreeDescription = '';
  export let disagreeDescription = '';
  export let votedType: voteType | null = null;
  export let changed = false;
  export let voteResult: Module.Ivote = {
    id: '',
    title: '',
    agreeDescription: '',
    disagreeDescription: '',
    voteAgreeCount: 0,
    voteDisagreeCount: 0,
    voteCount: 0
  };
  let agreePercent = 0, agreeStep = 0, agreeGuage = 0, agreeGuageRef;
  let disagreePercent = 0, disagreeStep = 0, disagreeGuage = 0, disagreeGuageRef;
  function guage(node, { duration, type, width }) {
    return {
      duration,
      css: t => {
        const eased = bounceOut(t);
        if(t === 1) {
          type === 'agree' ? agreeGuageRef.style.width = `${eased * width}px` :  disagreeGuageRef.style.width = `${eased * width}px`
        }
        return `width: ${eased * width}px;`
      }
    };
  }
</script>

<div class="flex flex-col items-center justify-center flex-1 pt-4 pb-2">
  <span
    class="w-max px-3 py-[2px] h-[22px] text-center text-white text-xs mb-[6px] rounded-[20px] bg-[rgba(255,255,255,0.3)] border border-[rgba(85,85,85,0.3)]"
    >라이프</span
  >
  <h3 class="text-2xl text-white text-center mb-[17px] w-[320px]">{title}</h3>
  <button
    class="mb-3 vote-btn"
    class:voted={votedType}
    on:click={() => vote(voteType.AGREE)}
  >
    {#if votedType}
      <span class="vote-percent" class:change={changed}>
        <Countup
          initial={0}
          value={agreePercent}
          duration={1000}
          step={agreeStep}
          roundto={agreePercent}
          format={false}
        />
        <span class="vote-percent-suffix" class:change={changed}>%</span>
      </span>
      {#if disagreePercent}
        <span class="vote-guage agree" in:guage="{{duration: 1500, width: agreeGuage, type: 'agree'}}" bind:this={agreeGuageRef}></span>
      {/if}
    {:else}
      {agreeDescription}
    {/if}
  </button>
  <button
    class="vote-btn"
    class:voted={votedType}
    on:click={() => vote(voteType.DISAGREE)}
  >
    {#if votedType}
      <span class="vote-percent" class:change={changed}>
        <Countup
          initial={0}
          value={disagreePercent}
          duration={1000}
          step={disagreeStep}
          roundto={disagreePercent}
          format={false}
        />
        <span class="vote-percent-suffix" class:change={changed}>%</span>
      </span>
      {#if disagreePercent}
        <span class="vote-guage disagree" in:guage="{{duration: 1500, width: disagreeGuage, type:'disagree'}}" bind:this={disagreeGuageRef}></span>
      {/if}
    {:else}
      {disagreeDescription}
    {/if}
  </button>
  <button
    class="w-max px-3 py-[2px] h-[22px] text-center text-white text-xs mb-[6px] rounded-[20px] bg-[rgba(255,255,255,0.3)] border border-[rgba(85,85,85,0.3)] mt-5"
    on:click={() => reset()}>리셋하기</button
  >
</div>

<style lang="postcss">
  .vote-btn {
    @apply w-full h-[150px] flex justify-center items-center bg-[rgba(255,255,255,0.75)] hover:bg-[rgba(255,255,255,0.85)] shadow-[0_0_20px_4px_rgba(0,0,0,0.06)] rounded-[15px] text-lg text-[#222222] font-bold px-[29px];
  }
  .voted {
    @apply relative h-[52px] justify-start  duration-[1500ms] delay-[1500ms];
  }
  .vote-guage {
    @apply content-[''] absolute left-0 top-0 h-full rounded-[15px] transition-all duration-[1500ms] z-10;
  }
  .agree {
    @apply bg-[#BD8DDB];
  }
  .disagree {
    @apply bg-[#FFD952];
  }
  .vote-percent {
    @apply absolute left-[30px] text-[60px] leading-[60px] font-medium duration-[1500ms] flex items-end z-20;
  }
  .vote-percent.change {
    @apply text-[18px] leading-[28px];
  }
  .vote-percent-suffix {
    @apply text-[30px] leading-[30px] font-light duration-[1500ms];
  }
  .vote-percent-suffix.change {
    @apply text-[18px] leading-[28px] font-medium;
  }
</style>
