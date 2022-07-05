<script lang="ts">
  import {Route} from 'tinro';

  import Home from '@/pages/Home.svelte';
  import List from '@/pages/List.svelte';
  import Login from '@/pages/Login.svelte';
  import Register from '@/pages/Register.svelte';
</script>

<Route path="/"><Home /></Route>
<Route path="/list"><List /></Route>
<Route path="/login"><Login /></Route>
<Route path="/register"><Register /></Route>
