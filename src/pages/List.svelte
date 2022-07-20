<script lang="ts">
  import Vote from '@/components/Vote.svelte';

  $: votes = fetch('http://13.124.104.234:8080/vote-subjects', {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    },
    method: 'GET',
    credentials: 'include'
  })
    .then(res => {
      console.log(res, res.text(), res.json());
      return res.text();
    })
    .then(data => {
      console.log(data);
    });

  let currentVote = {};
  const goVote = (vote: Module.Ivote) => {
    currentVote = vote;
  };
</script>

<div class="list-component">
  {#if currentVote.id}
    <Vote vote={currentVote} />
  {:else}
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>투표 주제</th>
            <th>링크</th>
          </tr>
        </thead>
        <tbody>
          {#await votes then votes}
            {#each votes as vote}
              <tr>
                <td>{vote.title}</td>
                <td>
                  <button
                    on:click={() => {
                      goVote(vote);
                    }}>투표하러 가기</button
                  >
                </td>
              </tr>
            {/each}
          {/await}
        </tbody>
      </table>
    </div>
  {/if}
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
