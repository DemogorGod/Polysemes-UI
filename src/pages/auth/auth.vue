<script setup>
    import { ref } from 'vue';
    import CloseIcon from 'vue-material-design-icons/Close.vue';
    import Input from '../../components/elements/input.vue';
    import useAuth from '../../composables/auth';
    
    const { user, logIn, logOut} = useAuth()

    const Email = ref('')
    const password = ref('')

    const onChangeEmail = (e) => {
        Email.value = e[0]
    }
    const onChangePassword = (e) => {
        password.value = e[0]
    }
    
</script>

<template>
    <div class="table h-screen bg-[#fff] w-full">
        <div class="table-cell align-middle">
            <div class="mx-auto my-auto w-max text-left">
                <div class="card px-[25px] py-[25px] w-[350px] h-[450px]">
                    <div class="flex justify-end text-span">
                        <router-link to="/" class="button_outline">
                            <CloseIcon />
                        </router-link>
                    </div>
                    <div class="mb-[15px]">
                        <img src="Polysemes.svg" alt="" class="w-[30px]">
                    </div>
                    <div class="text-primary2 text-span-two mb-[50px]">
                        Being creative starts here
                    </div>
                    <div class="mb-[30px]">
                        <Input 
                        :placeholder="'Email'"
                        :value="Email"
                        :on-change="onChangeEmail"
                        />
                    </div>
                    <div class="mb-[50px]">
                        <Input 
                        :placeholder="'Password'"
                        :value="password"
                        :on-change="onChangePassword"
                        />
                    </div>
                    <div class="w-[300px] flex justify-between text-span-three align-middle">
                        <div class="text-primary2/[.5] my-auto">
                            Not a member? <span class="text-secondary2"> sing up</span>
                        </div>
                        <div>
                            <button class="button_primary font-bold	" @click="logIn()">
                                Sing In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
