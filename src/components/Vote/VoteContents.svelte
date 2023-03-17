<script lang="ts">
  import {voteStore, voteType} from '@/store/voteStore';
  import {voteSubjectStore} from '@/store/voteSubjectStore';
  import Countup from 'svelte-countup';
  import {bounceOut} from 'svelte/easing';
  import BestComment from '@/components/vote/BestComment.svelte';
  import Button from '@/components/common/button/Button.svelte';

  /** 투표하기 */
  export let vote = async (type: voteType) => {
    votedType = type;
    try {
      await voteStore.postVote({subjectId: id, type});
    } catch (error) {
      console.error(error);
    } finally {
      voteSubjectStore.subscribe(datas => {
        // 투표결과
        voteResult = datas.voteSubject;
        const voteCount = voteResult.voteCount;
        // 찬성 데이터
        const agreeCount = voteResult.voteAgreeCount;
        agree.percent = Math.round((agreeCount / voteCount) * 100);
        agree.step = Math.round(agreeCount / 100) || 1;
        agree.guage = (320 * agree.percent) / 100;
        agree.bestComment = datas.commentA;
        // 반대 데이터
        const disagreeCount = voteResult.voteDisagreeCount;
        disagree.percent = Math.round((disagreeCount / voteCount) * 100);
        disagree.step = Math.round(disagreeCount / 100);
        disagree.guage = (320 * disagree.percent) / 100;
        disagree.bestComment = datas.commentB;
      });
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
  export let voteCount = 0;
  interface voteElement {
    percent: number;
    step: number;
    guage: number;
    ref: HTMLSpanElement | null;
    bestComment: VoteModule.BestComment | null;
  };
  let agree: voteElement = {
    percent: 0,
    step: 0,
    guage: 0,
    ref: null,
    bestComment: null
  };
  let disagree: voteElement = {
    percent: 0,
    step: 0,
    guage: 0,
    ref: null,
    bestComment: null
  };
  function guage(
    node: HTMLElement,
    {duration, type, width}: {duration: number; type: string; width: number}
  ) {
    if (node) {
      return {
        duration,
        css: (t: number) => {
          const eased = bounceOut(t);
          if (t === 1) {
            if (type === 'agree' && agree.ref) {
              agree.ref.style.width = `${eased * width}px`;
            }
            if (type === 'disagree' && disagree.ref) {
              disagree.ref.style.width = `${eased * width}px`;
            }
          }
          return `width: ${eased * width}px;`;
        }
      };
    } else {
      return {
        duration: 0,
        css: (t: number) => {
          const eased = bounceOut(t);
          return `width: ${eased * width}px;`;
        }
      };
    }
  }
</script>

<div class="flex-1 overflow-hidden">
  <div
    class="flex flex-col items-center flex-1 pt-4 pb-2 h-full"
    class:!h-max={changed}
  >
    <div class="w-full flex gap-2">
      <span
        class="w-max px-3 py-[2px] h-[22px] text-center text-white text-xs mb-[6px] rounded-[20px] bg-[rgba(255,255,255,0.3)] border border-[rgba(85,85,85,0.3)]"
        >라이프</span
      >
      <p class="text-white text-[14px] leading-5 font-medium">
        {voteCount}명 참여
      </p>
      <button
        class="w-max px-3 py-[2px] h-[22px] text-center text-white text-xs mb-[6px] rounded-[20px] bg-[rgba(255,255,255,0.3)] border border-[rgba(85,85,85,0.3)]"
        on:click={() => reset()}>리셋하기</button
      >
    </div>
    <h3 class="vote-title" class:voted={changed}>{title}</h3>
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
        {#if agree.percent}
          <span
            class="vote-guage agree"
            in:guage={agree.ref, {duration: 1500, width: agree.guage, type: 'agree'}}
            bind:this={agree.ref}
          />
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
          <span
            class="vote-guage disagree"
            in:guage={disagree.ref, {duration: 1500, width: disagree.guage, type: 'disagree'}}
            bind:this={disagree.ref}
          />
        {/if}
      {:else}
        {disagreeDescription}
      {/if}
    </button>
  </div>
  <div class="best-comments-container">
    <BestComment type={voteType.AGREE} data={agree.bestComment || null} />
    <BestComment type={voteType.DISAGREE} data={disagree.bestComment || null} />
    <Button
      src="/images/icon/icn_next_gray_right.svg"
      text="댓글더보기"
      style="color: #666666; flex-direction: row-reverse; gap: 4px; margin-top: 12px;"
      imgFull={false}
    />
  </div>
</div>

<style lang="postcss">
  .vote-title {
    @apply w-full h-[96px] text-2xl text-white mb-[21px] duration-[1000ms] overflow-hidden;
  }
  .vote-title.voted {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-wrap: break-word;
    @apply !h-[32px];
  }
  .vote-btn {
    @apply w-full h-[150px] flex justify-center items-center bg-[rgba(255,255,255,0.75)] hover:bg-[rgba(255,255,255,0.85)] shadow-[0_0_20px_4px_rgba(0,0,0,0.06)] rounded-[10px] text-lg text-[#222222] font-bold px-[29px];
  }
  .vote-btn.voted {
    @apply relative h-[52px] justify-start  duration-[1000ms] delay-[1500ms];
  }
  .vote-guage {
    @apply content-[''] absolute left-0 top-0 h-full rounded-[10px] transition-all duration-[1500ms] z-10;
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
  .best-comments-container {
    @apply mt-4 w-full flex flex-col justify-center items-center bg-white rounded-[10px] p-4;
  }
</style>
