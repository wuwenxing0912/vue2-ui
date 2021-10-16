<template>
  <Example description="按钮尺寸：按钮有大、中、小三种尺寸。" :code="code">
    <Button
      levle="default"
      style="margin-right: 20px"
      :size="size"
      @click.native="changeSize('large')"
      >Large
    </Button>
    <Button
      levle="primary"
      style="margin-right: 20px"
      :size="size"
      @click.native="changeSize('middle')"
      >Middle
    </Button>
    <Button
      levle="dashed"
      style="margin-right: 20px"
      :size="size"
      @click.native="changeSize('middle')"
      >Middle
    </Button>
    <Button levle="danger" :size="size" @click.native="changeSize('small')">
      Small
    </Button>
  </Example>
</template>

<script lang="js">
import Button from "../Button.vue";
import Example from "../../utils/Example.vue";
export default {
  components: { Button: Button, Example },
  data() {
    return {
      size: "middle",
      code: `<template>
  <Button levle="default" :size="size" @click="changeSize('large')">Default</Button>
  <Button levle="primary" :size="size" @click="changeSize('middle')">Primary</Button>
  <Button levle="dashed" :size="size" @click="changeSize('middle')">Dashed</Button>
  <Button levle="danger" :size="size" @click="changeSize('small')">Danger</Button>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  data() {
    size: "middle"
  },
  methods: {
    changeSize(value){
      this.size = value
    }
  }
}
<` + "/script>"
    }
  },
  methods: {
    changeSize(value){
      this.size = value
    }
  }
};
</script>
