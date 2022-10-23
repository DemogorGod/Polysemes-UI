<script setup>
    import { ref } from 'vue';
    import useComponents from '../../composables/components'
    import useAuth from '../../composables/auth'
    import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
    import Magnify from 'vue-material-design-icons/Magnify.vue'


    const {
        components,
        selectedComponent
    } = useComponents()

    const { user, loadingAuth } = useAuth()
    const themeDropdown = ref(false)
    const componentDropdown = ref(false)

</script>

<template>
    <div v-if="loadingAuth" class="loading w-full h-full">
        show me
    </div>
    <div v-if="user" class="flex page-x-padding">
        <div @mouseleave="themeDropdown = false" class=" pt-[50px] pb-[25px] mr-[25px]">
            <div class="dropdown-container" >
                <div 
                class="flex bg-white rounded-[2px] px-[6px] py-[8px] text-span-three  cursor-pointer hover:bg-brown/[0.75]"
                @click="themeDropdown = !themeDropdown"
                >
                    <span class="mr-[80px] font-black text-[#767676]">Select Theme</span>
                    <ChevronDownIcon class=""/>
                </div>
                <div 
                class="dropdown w-[185px] card"
                :style="themeDropdown? 'display: block' : ''"
                >
                    themes
                </div>
            </div>
        </div>
        <div @mouseleave="componentDropdown = false" class="pt-[50px]">
            <div class="dropdown-container" >
                <div 
                class="flex bg-white rounded-[2px] px-[6px] py-[8px] text-span-three  cursor-pointer hover:bg-brown/[0.75]"
                @click="componentDropdown = !componentDropdown"
                >
                    <input type="text" placeholder="Search Component" class="text-[#767676] bg-transparent outline-none w-[200px] mr-[5px]">
                    <Magnify class=""/>
                </div>
                <div 
                class="dropdown w-[230px] card"
                :style="componentDropdown? 'display: block' : ''"
                >
                    components
                </div>
            </div>
        </div>
    </div>
    <div class="page-x-padding pt-[50px]" v-if="$route.fullPath.split('/').length <= 2">
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