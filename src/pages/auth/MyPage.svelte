<script lang="ts">
  import {onMount} from 'svelte';
  import UserService from '$service/user.service';

  let user: UserModule.Iuser = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    address: '',
    bio: '',
    interests: [],
    profileImage: ''
  };
  let isLoading = true;

  onMount(async () => {
    try {
      user = await UserService.getUser();
      isLoading = false;
    } catch (error) {
      console.error(error);
      isLoading = false;
    }
  });
</script>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <h1>My Page</h1>
  <p>Name: {user.name}</p>
  <p>Age: {user.age}</p>
  <p>Email: {user.email}</p>
  <p>Address: {user.address}</p>
  <p>Bio: {user.bio}</p>
  <p>Interests: {user.interests.join(', ')}</p>
  <p>Profile Image: {user.profileImage}</p>
{/if}
