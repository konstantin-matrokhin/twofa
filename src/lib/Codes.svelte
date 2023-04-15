<script>
    import Message from "./Message.svelte";
    import totp from "totp-generator";
    import Code from "./code/Code.svelte";
    import {message, timer} from "../stores.js";
    import {onDestroy} from "svelte";

    const secret = "jqsdm5ycfnhuwmry";

    let codes = updatedCodes();

    let unsubscribe = timer.subscribe(() => {
        codes = updatedCodes();
    });

    function updatedCodes() {
        return new Map([
            [1, generateCode("Bitfinex", "test@localhost", secret)],
            [2, generateCode("Twitter", "test@localhost", secret)],
            [3, generateCode("Facebook", "test@localhost", secret)],
            [4, generateCode("Linkedin", "test@localhost", secret)],
            [5, generateCode("Instagram", "test@localhost", secret)],
            [6, generateCode("Youtube", "test@localhost", secret)]
        ]);
    }

    function generateCode(name, account, secret) {
        let value = totp(secret);
        return {name, account, value};
    }

    onDestroy(unsubscribe);
</script>

<div class="code-list">
    {#each [...codes] as [id, code]}
        <Code name={code.name} value={code.value}/>
    {/each}

    {#if $message}
        <Message/>
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
</style>