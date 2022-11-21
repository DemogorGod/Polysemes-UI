<script setup>
import useComponents from '@/composables/components'
import { watch, ref } from 'vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import FormatLineHeight from 'vue-material-design-icons/FormatLineHeight.vue'
import FormatLetterSpacingVariant from 'vue-material-design-icons/FormatLetterSpacingVariant.vue'
import SquareMedium from 'vue-material-design-icons/SquareMedium.vue'
import FormatLetterCaseUpper from 'vue-material-design-icons/FormatLetterCaseUpper.vue'
import FormatLetterCaseLower from 'vue-material-design-icons/FormatLetterCaseLower.vue'
import FormatParagraphSpacing from 'vue-material-design-icons/FormatParagraphSpacing.vue'
import FormatVerticalAlignBottom from 'vue-material-design-icons/FormatVerticalAlignBottom.vue'
import FormatVerticalAlignCenter from 'vue-material-design-icons/FormatVerticalAlignCenter.vue'
import FormatVerticalAlignTop from 'vue-material-design-icons/FormatVerticalAlignTop.vue'
import FormatText from 'vue-material-design-icons/FormatText.vue'
import FormatUnderline from 'vue-material-design-icons/FormatUnderline.vue'
import FormatStrikethrough from 'vue-material-design-icons/FormatStrikethrough.vue'
import FormatOverline from 'vue-material-design-icons/FormatOverline.vue'

import FormatAlignJustify from 'vue-material-design-icons/FormatAlignJustify.vue'
import FormatAlignLeft from 'vue-material-design-icons/FormatAlignLeft.vue'
import FormatAlignCenter from 'vue-material-design-icons/FormatAlignCenter.vue'
import FormatAlignRight from 'vue-material-design-icons/FormatAlignRight.vue'


const props = defineProps({
    value: String,
    component: Object,
    type: String,
    title: String
})

const {
    updateComponent
} = useComponents()

const fontFamily = ref(props.value['font-family'])
const fontStyle = ref('Regular')

const fontStyleOptions = ref([
    'Regular',
    'Medium',
    'Semibold',
    'Bold',
    'Extra Bold',
    'Black',
    'Regular Italic',
    'Medium Italic',
    'Semibold Italic',
    'Bold Italic',
    'Extra Bold Italic',
    'Black Italic'
])

const fontSize = ref(props.value['font-size'].split('px')[0])
const textDecoration = ref(props.value['text-decoration-line'])
const textTransform = ref(props.value['text-transform'])
const textAlign = ref(props.value['text-align'])
const color = ref(props.value['color'])
const alignItems = ref(props.value['align-items'])
// const lineHeight = ref(props.value[''])
const letterSpacing = ref(props.value[''])
// const lineHeight = ref(props.value[''])

watch(props, (newValue, oldValue) => {
    updateComponent(props.component.name, props.type, newValue.value)
})

watch([fontSize, textDecoration, textTransform, textAlign,color, alignItems, fontFamily, fontStyle], () => {
    const newValue = {
        'color': color.value,
        'font-family': props.value['font-family'],
        'font-style': props.value[ 'font-style'],
        'font-weight': props.value['font-weight'],
        'font-size': props.value['font-size'],
        'line-height': props.value['line-height'],
        'text-align': props.value['text-align'],
        'letter-spacing': props.value['letter-spacing'],
        'text-transform': props.value['text-transform'],
        'text-decoration-line': props.value['text-decoration-line'],
        'align-items': props.value['align-items'],
    }
    // props.value['color'] = color.value
    updateComponent(props.component.name, props.name, newValue)
})
</script>

<template>
    <div class="my-[10px]">
        <label for="text-input" class="text-span-four text-primary/[0.5]">{{ title }}</label>
        <div class="form-inputs px-0 flex justify-between mb-[10px] w-full">
            <select 
            class="w-full form-selects mr-[10px]"
            name="font-family" 
            v-model="fontFamily">
                <option value="Red Hat Display">Red Hat Display</option>
            </select>

            <div class="flex justify-between w-[100px]">
                <input 
                name="text-input" 
                type="text" 
                v-model="color.split('#')[1]"
                class="outline-none bg-transparent w-full"
                >
                <input 
                type="color" 
                v-model="color" 
                class="w-[20px] h-[20px] outline-none"
                />
            </div>
        </div>
        {{value}}
        <div class="flex justify-between">
            <div class="form-inputs px-0 flex justify-between mb-[10px]">
                <select 
                class="form-selects "
                name="font-family" 
                v-model="fontStyle">
                    <option 
                    :value="option"
                    v-for="option in fontStyleOptions"
                    :key="option"
                    >{{option}}</option>
                </select>
            </div>
            <div class="form-inputs flex justify-between mb-[10px]">
                <select 
                class="form-selects "
                name="font-family" 
                v-model="fontSize">
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                    <option value="36">36</option>
                    <option value="40">40</option>
                    <option value="48">48</option>
                    <option value="64">64</option>
                    <option value="96">96</option>
                    <option value="128">128</option>
                </select>
                <span class="border-l text-primary/[0.5] text-span-four px-[5px] mt-[2px]"> 
                    Px
                </span>
            </div>
        </div>
        <div class="flex justify-between mb-[10px]">
            <div class="flex form-inputs pl-[5px]">
                <FormatLineHeight class="text-primary/[0.5] text-span-two mr-[10px] mb-[3px]"/>
                <input 
                name="text-input" 
                type="number" 
                class="outline-none bg-transparent w-[50px] pl-[5px] border-l"
                >
            </div>
            <div class="flex form-inputs pl-[5px]">
                <FormatLetterSpacingVariant class="text-primary/[0.5] text-span-two mr-[10px] mb-[3px]"/>
                <input 
                name="text-input" 
                type="number" 
                class="outline-none bg-transparent w-[50px] pl-[5px] border-l"
                >
            </div>
        </div>
        <div class="flex justify-between mb-[10px]">
            <div class="flex pl-[5px] form-inputs">
                <button 
                class="text-primary/[0.5] mb-[3px] text-span-two mr-[5px] px-[3px] hover:bg-primary/[0.5]"
                :class="textTransform === ''? 'bg-grey' : 'bg-[#F8F8F8]'"
                >
                    <SquareMedium />
                </button>
                <button 
                class="text-primary/[0.5] mb-[3px] text-span-two mr-[5px] px-[3px] hover:bg-primary/[0.5]"
                :class="textTransform === 'uppercase'? 'bg-grey' : 'bg-[#F8F8F8]'"
                >
                    <FormatLetterCaseUpper />
                </button>
                <button 
                class="text-primary/[0.5] mb-[3px] text-span-two px-[3px] hover:bg-primary/[0.5]"
                :class="textTransform === 'lowercase'? 'bg-grey' : 'bg-[#F8F8F8]'"
                >
                    <FormatLetterCaseLower />
                </button>
            </div>
            
            <div class="flex form-inputs pl-[5px]">
                <FormatParagraphSpacing class="text-primary/[0.5] text-span-two mr-[10px] mb-[3px]"/>
                <input 
                name="text-input" 
                type="number" 
                class="outline-none bg-transparent w-[50px] pl-[5px] border-l"
                >
            </div>
        </div>

        <div class="flex justify-between mb-[10px]">
            
            <div class="flex flex-col">
                <div class="flex mb-[22px] form-inputs">
                    <button 
                    class="text-primary/[0.5] mb-[3px] text-span-two mr-[5px] px-[3px] hover:bg-primary/[0.5]"
                    :class="textDecoration === 'none'? 'bg-grey' : 'bg-[#F8F8F8]'"
                    >
                        <FormatText />
                    </button>
                    <button 
                    class="text-primary/[0.5] mb-[3px] text-span-two mr-[5px] px-[3px] hover:bg-primary/[0.5]"
                    :class="textDecoration === 'underline'? 'bg-grey' : 'bg-[#F8F8F8]'"
                    >
                        <FormatUnderline />
                    </button>
                    <button 
                    class="text-primary/[0.5] mb-[3px] text-span-two mr-[5px] px-[3px] hover:bg-primary/[0.5]"
                    :class="textDecoration === 'line-through'? 'bg-grey' : 'bg-[#F8F8F8]'"
                    >
                        <FormatStrikethrough />
                    </button>
                    <button 
                    class="text-primary/[0.5] mb-[3px] text-span-two px-[3px] hover:bg-primary/[0.5]"
                    :class="textDecoration === 'overline'? 'bg-grey' : 'bg-[#F8F8F8]'"
                    >
                        <FormatOverline />
                    </button>
                </div>

                <div class="flex form-inputs">
                    <button 
                    class="text-primary/[0.5] mb-[3px] text-span-two mr-[5px] px-[3px] hover:bg-primary/[0.5]"
                    :class="textAlign === 'justify'? 'bg-grey' : 'bg-[#F8F8F8]'"
                    >
                        <FormatAlignJustify />
                    </button>
                    <button 
                    class="text-primary/[0.5] mb-[3px] text-span-two mr-[5px] px-[3px] hover:bg-primary/[0.5]"
                    :class="textAlign === 'left'? 'bg-grey' : 'bg-[#F8F8F8]'"
                    >
                        <FormatAlignLeft />
                    </button>
                    <button 
                    class="text-primary/[0.5] mb-[3px] text-span-two mr-[5px] px-[3px] hover:bg-primary/[0.5]"
                    :class="textAlign === 'center'? 'bg-grey' : 'bg-[#F8F8F8]'"
                    >
                        <FormatAlignCenter />
                    </button>
                    <button 
                    class="text-primary/[0.5] mb-[3px] text-span-two px-[3px] hover:bg-primary/[0.5]"
                    :class="textAlign === 'right'? 'bg-grey' : 'bg-[#F8F8F8]'"
                    >
                        <FormatAlignRight />
                    </button>
                </div>
            </div>
            <div class="flex flex-col form-inputs">
                <button 
                class="text-primary/[0.5] mb-[3px] text-span-two px-[3px] hover:bg-primary/[0.5]"
                :class="alignItems === 'flex-end'? 'bg-grey' : 'bg-[#F8F8F8]'"
                >
                    <FormatVerticalAlignBottom />
                </button>
                <button 
                class="text-primary/[0.5] mb-[3px] text-span-two px-[3px] hover:bg-primary/[0.5]"
                :class="alignItems === 'center'? 'bg-grey' : 'bg-[#F8F8F8]'"
                >
                    <FormatVerticalAlignCenter />
                </button>
                <button 
                class="text-primary/[0.5] mb-[3px] text-span-two px-[3px] hover:bg-primary/[0.5]"
                :class="alignItems === 'flex-start'? 'bg-grey' : 'bg-[#F8F8F8]'"
                >
                    <FormatVerticalAlignTop />
                </button>
            </div>
            
        </div>
        <hr>
    </div>
</template>