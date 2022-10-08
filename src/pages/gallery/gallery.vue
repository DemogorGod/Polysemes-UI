<script setup>
    import useComponents from '../../composables/components'
    import useAuth from '../../composables/auth'

    // gallery components
    import card from '../../components/gallery/card.vue'

    const {
        components,
        selectedComponent
    } = useComponents()
    

    const { user } = useAuth()

</script>

<template>
    <div v-if="user" class="text-left page-x-padding pt-[50px] flex">
        <div class="mr-[25px]">
            select theme
        </div>
        <div>
            select component
        </div>
    </div>
    <div class="page-x-padding page-y-padding" v-if="$route.fullPath.split('/').length <= 2">
        <div
        v-for="(item, i) in components" :key="i"
        class=" flex text-left justfiy-start flex-wrap">
            <span class="w-full text-left text-span-one text-[#D6C8C8] mb-[10px]">{{item.category}}</span>
            <span class="w-full text-left text-span-three text-[#83B6BA] mb-[30px]">{{item.detail}}</span>
            <div 
            v-for="(component, j) in item.components" :key="j" 
            class="mr-[80px] mb-[20px] "
            >
                <div class="mb-[10px]">
                    <span class="text-span-four text-[#D6C8C8]">{{component.name}}</span>
                </div>
                <router-link  
                :to="'/gallery/component/' + component.name" 
                @click="selectedComponent = component.name"
                >
                    <div 
                    class="card cursor-pointer hover:box-shadow-hover w-[150px] h-[150px]"
                    >
                        <div class="table h-full w-full">
                            <div class="table-cell align-middle">
                                <div class="mx-auto my-auto w-max">
                                    <span class="text-span-four text-primary">
                                        <component 
                                        :is="component.component"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div v-else class="h-full">
        <router-view></router-view>
    </div>
</template>