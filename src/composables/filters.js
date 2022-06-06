import { onMounted, readonly, ref, watch } from 'vue'



export default function useFilters () {
    const initalized = ref(false)

    // Sizing and Borders
    const widthMeasurement = ref(100)
    const widthUnits = ref('px')
    const width = ref(widthMeasurement.value + widthUnits.value)

    const heightMeasurement = ref(100)
    const heightUnits = ref('px')
    const height = ref(heightMeasurement.value + heightUnits.value)

    const roundingTL = ref(5)
    const roundingTR = ref(5)
    const roundingBL = ref(5)
    const roundingBR = ref(5)
    const roundingUnits = ref('px')
    const lockRounding = ref(false)
    const rounding = ref
    (
        roundingTL.value + roundingUnits.value + ' ' +
        roundingTR.value + roundingUnits.value + ' ' +
        roundingBR.value + roundingUnits.value + ' ' + 
        roundingBL.value + roundingUnits.value
    )

    const borderColor = ref('#c9c9c9')
    const borderWidth = ref(1)
    const borderStyle = ref('solid')

    const outlineColor = ref('#C44536')
    const outlineWidth = ref(1)
    const outlineStyle = ref('none')

    const outline = ref(outlineStyle.value + ' ' + outlineWidth.value + 'px ' + outlineColor.value)
    const border = ref(borderStyle.value + ' ' + borderColor.value + ' ' + borderWidth.value + 'px')

    watch([widthMeasurement, widthUnits], (newValue, oldValue) => {
        switch (widthUnits.value) {
            case "min":
                width.value = 'min-content'
                break;
            case "min":
                width.value = 'max-content'
                break;
            default:
                width.value = widthMeasurement.value + widthUnits.value
                break;
        }
    })

    watch([heightMeasurement, heightUnits], (newValue, oldValue) => {
        switch (heightUnits.value) {
            case "min":
                height.value = 'min-content'
                break;
            case "min":
                height.value = 'max-content'
                break;
            default:
                height.value = heightMeasurement.value + heightUnits.value
                break;
        }
    })

    watch([roundingTL, roundingTR, roundingBL, roundingBR, lockRounding], (newValue, oldValue) => {
        if(!lockRounding.value){
            rounding.value = (
                roundingTL.value + roundingUnits.value + ' ' +
                roundingTR.value + roundingUnits.value + ' ' +
                roundingBR.value + roundingUnits.value + ' ' + 
                roundingBL.value + roundingUnits.value
            )
        }else {
            for (let i = 0; i <= 4; i++) {
                if(newValue[i] !== oldValue[i]){
                    if(i !== 4){
                        roundingTL.value = newValue[i]
                        roundingTR.value = newValue[i]
                        roundingBR.value = newValue[i]
                        roundingBL.value = newValue[i]
                        rounding.value = (
                            roundingTL.value + roundingUnits.value + ' ' +
                            roundingTR.value + roundingUnits.value + ' ' +
                            roundingBR.value + roundingUnits.value + ' ' + 
                            roundingBL.value + roundingUnits.value
                        )
                    }else {
                        roundingTL.value = newValue[0]
                        roundingTR.value = newValue[0]
                        roundingBR.value = newValue[0]
                        roundingBL.value = newValue[0]
                        rounding.value = (
                            roundingTL.value + roundingUnits.value + ' ' +
                            roundingTR.value + roundingUnits.value + ' ' +
                            roundingBR.value + roundingUnits.value + ' ' + 
                            roundingBL.value + roundingUnits.value
                        )
                    }
                }
            }
        }
    })

    watch([borderColor, borderWidth, borderStyle], (newValue, oldValue) => {
        border.value = borderStyle.value + ' ' + borderColor.value + ' ' + borderWidth.value + 'px'
    })

    watch([outlineColor, outlineWidth, outlineStyle], (newValue, oldValue) => {
        outline.value = outlineStyle.value + ' ' + outlineColor.value + ' ' + outlineWidth.value + 'px'
    })
    

    onMounted(async () => {
        if (!initalized.value) {
            initalized.value = true
            console.log('filters mounted')
        }
    })

    return {
        initalized: readonly(initalized),

        // sizing and borders
        widthMeasurement: widthMeasurement,
        widthUnits: widthUnits,
        width: width,

        heightMeasurement: heightMeasurement,
        heightUnits: heightUnits,
        height: height,

        roundingTL: roundingTL,
        roundingTR: roundingTR,
        roundingBL: roundingBL,
        roundingBR: roundingBR,
        roundingUnits: roundingUnits,
        lockRounding: lockRounding,
        rounding: rounding,

        border: border,
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderStyle: borderStyle,

         outlineColor: outlineColor,
         outlineWidth: outlineWidth,
         outlineStyle: outlineStyle,
         outline: outline,
        }
}
