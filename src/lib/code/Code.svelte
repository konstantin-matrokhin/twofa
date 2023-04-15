<script>
    import {message} from "../../stores.js";
    import Countdown from "./Countdown.svelte";

    export let name;
    export let value;

    function copy() {
        message.set("Copied!");
    }
</script>

<div class="code" on:click={copy}>
    <div class="code__info">
        <div class="code__name">{name}</div>
        <div class="code__value">{value}</div>
    </div>
    <div class="code__side">
        <Countdown secondsRemaining=30 />
    </div>
</div>

<style lang="scss">
  .code {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: start;
    margin: 5px 0;
    color: #f6f6f6;
    background-color: lightslategray;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    pointer-events: bounding-box;
    -webkit-user-select: none;

    &__info {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }

    &__side {
      margin-left: auto;
    }

    &__name {
      -webkit-user-select: none;
    }

    &__value {
      -webkit-user-select: none;
    }
  }
</style>