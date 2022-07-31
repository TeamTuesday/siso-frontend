<script lang="ts">
  import VoteHeader from '@/components/Vote/VoteHeader.svelte';
  import VoteContents from '@/components/Vote/VoteContents.svelte';
  import VoteInfo from '@/components/Vote/VoteInfo.svelte';
  import Nav from '@/components/Nav.svelte';
  import {router} from 'tinro';
  const params = router.params();

  const id = params.id;
  $: vote = fetch(`http://13.124.104.234:8080/vote-subjects/${id}`)
    .then(res => res.json())
    .then((data: {voteSubject: Module.Ivote}) => data.voteSubject);
</script>

<div class="vote-container">
  {#await vote then vote}
    <VoteHeader />
    <VoteContents
      title={vote?.title}
      agree_description={vote?.agreeDescription}
      opposite_description={vote?.oppositeDescription}
    />
    <VoteInfo />
    <Nav />
  {/await}
</div>

<style lang="scss">
  .vote-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
