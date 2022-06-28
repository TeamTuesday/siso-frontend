<script lang="ts">
  let buttonText = 'Button';

  const handleClick = () => {
    buttonText = 'Button Clicked';
  };
</script>

<h1>Test button</h1>
<button on:click={handleClick}>{buttonText}</button>
