<script>
    import Message from "./Message.svelte";
    import totp from "totp-generator";
    import Code from "./code/Code.svelte";
    import {message, timer} from "../stores.js";
    import {getSeconds} from "../utils.js";
    import {onDestroy} from "svelte";

    const secret = "";

    let codes = updatedCodes();

    let unsubscribe = timer.subscribe(time => {
        if (getSeconds(time) % 30 === 0) {
            codes = updatedCodes();
        }
    });

    onDestroy(unsubscribe);

    function updatedCodes() {
        message.set("updated!");
        return new Map([
            [1, generateCode("Bitfinex", secret)],
            [2, generateCode("Twitter", secret)],
            [3, generateCode("Facebook", secret)],
            [4, generateCode("Linkedin", secret)],
            [5, generateCode("Instagram", secret)],
            [6, generateCode("Youtube", secret)]
        ]);
    }

    function generateCode(name, secret) {
        return {name, value: totp(secret)};
    }
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