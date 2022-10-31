<script setup>
    import { ref, shallowRef, defineAsyncComponent} from 'vue';
    import useComponents from '@/composables/components'

    // import contentCopyIcon from 'vue-material-design-icons/contentCopy.vue'

    const {
        selectedComponent
    } = useComponents()

    // const comment = ref('<!-- Card Component-->')
</script>

<template>
    <div class="page-x-padding pt-[25px] text-left h-[85%]">
        <div class="mb-[10px]">
            <span 
            class="w-full text-left text-span-one text-[#D6C8C8]"
            >{{$route.params.id}}</span>
        </div>
        
        <div class="flex h-[calc(100% - 10px)] h-full">
            <div class="w-full mr-[25px] overflow-auto">
                <div class="card p-[50px] table w-full h-full mb-[20px]">
                    <div class="table-cell align-middle ">
                        <div class="mx-auto my-auto w-max ">
                            <component 
                            :filters="selectedComponent.filters"
                            :is="selectedComponent.component"
                            />
                        </div>
                    </div>
                </div>
                <!-- <div class="card page-x-padding py-[25px]">
                    <div class="flex justify-end text-span-two">
                        <contentCopyIcon class="text-secondary/[.5] hover:text-primary cursor-pointer"/>
                    </div>
                    <code class="html">
                        <span class="html-tag">
                            &lt;
                            <span class="html-name"> div </span>
                            <span class="html-attr">class</span> = 
                            <span class="html-string">"container"</span>
                            >
                            <span class="block pl-[25px]">
                                card here
                            </span>
                            &lt;/
                            <span class="html-name"> div </span>
                            >
                            <span class="block html-comment">
                                {{ comment }}
                            </span>
                        </span>
                        
                    </code>
                </div>  -->
            </div>
            <div class="card w-[300px] h-full p-[25px]">
                <div class="flex justify-between">
                    <span class="text-span-four text-secondary mb-[5px]">
                        Design
                    </span>
                    <!-- <div>
                        <button>
                            tailwind
                        </button>
                        <button>
                            code
                        </button>
                    </div> -->
                </div>
                <hr class="h-[3px] bg-primary">
                <component v-for="(c, i) in selectedComponent.filters"
                :component="selectedComponent"
                :value="c.value"
                :is="c.component"
                :type="c.name"
                :title="c.title"
                />
            </div>
        </div>
    </div>
</template>