<script lang="ts">
  import {onMount} from 'svelte';
  import {voteSubjectStore} from '@/store/voteSubjectStore';

  onMount(async () => {
    await voteSubjectStore.fetchVoteSubjects();
  });
</script>

<div class="list-component">
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>투표 주제</th>
          <th>링크</th>
        </tr>
      </thead>
      <tbody>
        {#each $voteSubjectStore.voteSubjects as vote}
          <tr>
            <td>{vote.title}</td>
            <td>
              <a href="/vote/{vote.id}">투표하러 가기</a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .list-component {
    height: 100%;
  }
  .table-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  table {
    width: 300px;
  }
  th,
  td {
    text-align: center;
    white-space: nowrap;
  }
</style>
