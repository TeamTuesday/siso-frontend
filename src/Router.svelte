<script lang="ts">
  import {Route} from 'tinro';

  import Home from '@/pages/Home.svelte';
  import List from '@/pages/List.svelte';
  import Vote from '@/components/Vote/Vote.svelte';
  import Login from '@/pages/auth/Login.svelte';
  import Register from '@/pages/auth/Register.svelte';
</script>

<Route path="/" redirect="/home" />
<Route path="/home"><Home /></Route>
<Route path="/list"><List /></Route>
<Route path="/vote/:id"><Vote /></Route>
<Route path="/auth/login"><Login /></Route>
<Route path="/auth/register"><Register /></Route>
