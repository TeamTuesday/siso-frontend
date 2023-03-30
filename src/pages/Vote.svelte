<script lang="ts">
  import {onMount} from 'svelte';
  import VoteHeader from '@/components/Vote/VoteHeader.svelte';
  import VoteContents from '@/components/Vote/VoteContents.svelte';
  import VoteInfo from '@/components/Vote/VoteInfo.svelte';
  import Button from '@/components/common/button/Button.svelte';
  import {voteSubjectStore} from '@/store/voteSubjectStore';
  import {meta} from 'tinro';

  const params = meta().params;
  let showNotice = false;
  let hideNotice = false;

  onMount(async () => {
    const {id} = params;
    await voteSubjectStore.fetchVoteSubject(id);
    const myNotice = sessionStorage.getItem('myNotice');
    if (myNotice) {
      hideNotice = true;
      return;
    } else {
      showNotice = true;
      sessionStorage.setItem('myNotice', 'true');
      setTimeout(() => {
        showNotice = false;
      }, 3000);
      setTimeout(() => {
        hideNotice = true;
      }, 4500);
    }
  });
</script>

<div
  class="h-[calc(100%+56px)] transition duration-[1500ms] bg-[url('/images/sample_background.jpg')]"
  class:show-notice-wrapper={showNotice}
  class:!h-full={hideNotice}
>
  <div
    class="h-[calc(100%-56px)] flex flex-col items-center px-4 relative bg-no-repeat bg-center bg-cover"
    class:!h-full={hideNotice}
  >
    <VoteHeader />
    <VoteContents
      id={$voteSubjectStore.voteSubject?.id}
      title={$voteSubjectStore.voteSubject?.title}
      agreeDescription={$voteSubjectStore.voteSubject?.agreeDescription}
      disagreeDescription={$voteSubjectStore.voteSubject?.disagreeDescription}
      voteCount={$voteSubjectStore.voteSubject?.voteCount}
    />
    <VoteInfo />
    <Button
      src="/images/icon/icn_next.svg"
      alt="voteCount"
      size="md"
      imgSize="lg"
      style="position: absolute; bottom: 6px;"
    />
  </div>
  <div
    class="flex h-[56px] w-full bg-black/20 justify-center items-center text-white"
    class:!hidden={hideNotice}
  >
    위로 밀어 다음 주제를 확인하세요
  </div>
</div>

<style lang="postcss">
  .show-notice-wrapper {
    @apply h-[calc(100%+56px)] translate-y-[-56px];
  }
</style>
