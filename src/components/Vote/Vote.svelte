<script lang="ts">
  import {onMount} from 'svelte';
  import VoteHeader from '@/components/Vote/VoteHeader.svelte';
  import VoteContents from '@/components/Vote/VoteContents.svelte';
  import VoteInfo from '@/components/Vote/VoteInfo.svelte';
  import Button from '@/components/Common/Button.svelte';
  import {voteSubjectStore} from '@/store/voteSubjectStore';
  import {router} from 'tinro';

  const params = router.params();

  onMount(async () => {
    const {id} = params;
    await voteSubjectStore.fetchVoteSubject(id);
  });
</script>

<div
  class="flex flex-col items-center h-full px-4 relative bg-[url('/images/sample_background.jpg')] bg-no-repeat bg-center bg-cover"
>
  <VoteHeader />
  <VoteContents
    id={$voteSubjectStore.voteSubject?.id}
    title={$voteSubjectStore.voteSubject?.title}
    agree_description={$voteSubjectStore.voteSubject?.agreeDescription}
    disagree_description={$voteSubjectStore.voteSubject?.disagreeDescription}
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
