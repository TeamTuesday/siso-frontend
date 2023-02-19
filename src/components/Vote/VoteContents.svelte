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
        const agreeCount = voteResult.voteAgreeCount;
        const disagreeCount = voteResult.voteDisagreeCount;
        const voteCount = voteResult.voteCount;
        agree.percent = Math.round(
          (agreeCount / voteCount) * 100
        );
        agree.step = Math.round(agreeCount / 100);
        agree.guage = 320 * agree.percent / 100;
        disagree.percent = Math.round(
          (disagreeCount / voteCount) * 100
        );
        disagree.step = Math.round(disagreeCount / 100);
        disagree.guage = 320 * disagree.percent / 100;
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
  export let agreeDescription = '';
  export let disagreeDescription = '';
  let agree = {
    percent: 0,
    step: 0,
    guage: 0,
    ref: null
  }
  let disagree = {
    percent: 0,
    step: 0,
    guage: 0,
    ref: null
  }
  function guage(node, { duration, type, width }) {
    return {
      duration,
      css: t => {
        const eased = bounceOut(t);
        if(t === 1) {
          type === 'agree' ? agree.ref.style.width = `${eased * width}px` :  disagree.ref.style.width = `${eased * width}px`
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
          value={agree.percent}
          duration={1000}
          step={agree.step}
          roundto={agree.percent}
          format={false}
        />
        <span class="vote-percent-suffix" class:change={changed}>%</span>
      </span>
      {#if disagree.percent}
        <span class="vote-guage agree" in:guage="{{duration: 1500, width: agree.guage, type: 'agree'}}" bind:this={agree.ref}></span>
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
          value={disagree.percent}
          duration={1000}
          step={disagree.step}
          roundto={disagree.percent}
          format={false}
        />
        <span class="vote-percent-suffix" class:change={changed}>%</span>
      </span>
      {#if disagree.percent}
        <span class="vote-guage disagree" in:guage="{{duration: 1500, width: disagree.guage, type:'disagree'}}" bind:this={disagree.ref}></span>
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
