<script lang="ts">
  import VoteHeader from '@/components/Vote/VoteHeader.svelte';
  import VoteContents from '@/components/Vote/VoteContents.svelte';
  import VoteInfo from '@/components/Vote/VoteInfo.svelte';
  import Nav from '@/components/Nav.svelte';

  export let vote: Module.Ivote;
</script>

<div class="vote-container">
  <VoteHeader />
  <VoteContents
    title={vote?.title}
    agree_description={vote?.agree_description}
    opposite_description={vote?.opposite_description}
  />
  <VoteInfo count={vote?.vote_count} />
  <Nav />
</div>

<style lang="scss">
  .vote-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
