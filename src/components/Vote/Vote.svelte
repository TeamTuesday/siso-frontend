<script lang="ts">
  import VoteHeader from '@/components/Vote/VoteHeader.svelte';
  import VoteContents from '@/components/Vote/VoteContents.svelte';
  import VoteInfo from '@/components/Vote/VoteInfo.svelte';
  import Button from '@/components/Common/Button.svelte';
  import {router} from 'tinro';
  const params = router.params();

  const {id} = params;
  $: vote = fetch(`http://h24.asuscomm.com:8080/vote-subjects/${id}`)
    .then(res => res.json())
    .then((data: {voteSubject: Module.Ivote}) => data.voteSubject);
</script>

<div
  class="flex flex-col items-center h-full px-4 relative bg-[url('/images/sample_background.jpg')] bg-no-repeat bg-center bg-cover"
>
  {#await vote then vote}
    <VoteHeader />
    <VoteContents
      id={vote?.id}
      title={vote?.title}
      agree_description={vote?.agreeDescription}
      disagree_description={vote?.disagreeDescription}
    />
    <VoteInfo />
    <Button
      src="/images/icon/icn_next.svg"
      alt="voteCount"
      size="md"
      imgSize="lg"
      style="position: absolute; bottom: 6px;"
    />
  {/await}
</div>
