<script setup>
    import { ref, shallowRef, defineAsyncComponent} from 'vue';
    import router from '../../../composables/router';
    import contentCopyIcon from 'vue-material-design-icons/contentCopy.vue'
    import useAuth from '../../../composables/auth'

    // possible routes
    // const routes = shallowRef({
    //     'infoalert': card
    // })
    const route = router.currentRoute.value.path.split('/')[3]
    const selectedComponent = defineAsyncComponent(() => import(`../../../components/gallery/InfoAlert.vue`))

    const { user } = useAuth()

    const comment = ref('<!-- Card Component-->')
</script>

<template>
    <!-- No Filters here, needs to be signed in to view the portal with filters -->
    <div class="page-x-padding mb-[50px] h-full text-left">
        <div class="mb-[10px]">
            <span 
            class="w-full text-left text-span-one text-[#D6C8C8]"
            >{{$route.params.id}}</span>
        </div>
        <div class="mb-[30px]" v-if="!user">
            <span class="w-full text-left text-span-three text-pink">
                Element customizations are enabled once you are signed in
            </span>
        </div>
        
        <div class="flex">
            <div class="w-full mr-[25px]">
                <div class="card p-[50px] table w-full h-fit mb-[20px]">
                    <div class="table-cell align-middle">
                        <div class="mx-auto my-auto w-max">
                            <component 
                            :is="selectedComponent"
                            />
                        </div>
                    </div>
                </div>
                <div class="card page-x-padding py-[25px]">
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
                </div> 
            </div>
            <div class="card w-[300px]">
                filters
            </div>
        </div>
        
    </div>
</template>