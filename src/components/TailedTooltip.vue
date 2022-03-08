<template>
  <v-tooltip v-bind="$attrs" color="rgba(0,0,0,0.9)">
    <!-- activator -->
    <template #activator="scope">
      <slot name="activator" v-bind="scope"></slot>
    </template>

    <!-- default -->
    <template #default>
      <slot />
      <div
        v-if="'top' in $attrs"
        class="tail"
        style="
          left: calc(50% - 5px);
          bottom: -5px;
          border-bottom: 0;
          border-top-color: rgba(0, 0, 0, 0.9);
        "
      ></div>
      <div
        v-if="'left' in $attrs"
        class="tail"
        style="
          top: calc(50% - 5px);
          right: -5px;
          border-right: 0;
          border-left-color: rgba(0, 0, 0, 0.9);
        "
      ></div>
      <div
        v-if="'bottom' in $attrs"
        class="tail"
        style="
          left: calc(50% - 5px);
          top: -5px;
          border-top: 0;
          border-bottom-color: rgba(0, 0, 0, 0.9);
        "
      ></div>
      <div
        v-if="'right' in $attrs"
        class="tail"
        style="
          top: calc(50% - 5px);
          left: -5px;
          border-left: 0;
          border-right-color: rgba(0, 0, 0, 0.9);
        "
      ></div>
    </template>
  </v-tooltip>
</template>
<style scoped>
.tail {
  border-style: solid;
  border-width: 5px;
  border-color: transparent;
  width: 0px;
  position: absolute;
}
</style>
