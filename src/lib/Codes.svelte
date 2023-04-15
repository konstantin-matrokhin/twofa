<script>
  import Message from "./Message.svelte";

  let showMessage = false;

  const codes = [
      generateCode("Github", "12345"),
      generateCode("Twitter", "123456"),
      generateCode("Facebook", "1234567"),
      generateCode("Linkedin", "12345678"),
      generateCode("Instagram", "123456789"),
      generateCode("Youtube", "1234567890")
  ];

  function generateCode(name, value) {
    return {name, value};
  }

  function copy() {
    showMessage = true;
    setTimeout(() => {
      showMessage = false;
    }, 2000);
  }
</script>

<div class="code-list">
  {#each codes as code}
    <div class="code" on:click={copy}>
      <div class="code__name">{code.name}</div>
      <div class="code__value">{code.value}</div>
    </div>
  {/each}
  {#if showMessage}
    <Message text="Copied!"/>
  {/if}
</div>

<style lang="scss">
  .code-list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: stretch;
  }

  .code {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: start;
    margin: 5px 0;
    color: #f6f6f6;
    background-color: lightslategray;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    pointer-events: bounding-box;
    -webkit-user-select: none;

    &__name {
      -webkit-user-select: none;
    }

    &__value {
      -webkit-user-select: none;
    }
  }
</style>