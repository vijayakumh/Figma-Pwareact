import color from '../../../figmaData/tokens.json'

const figma = {
    figmacolor : {
        globalbackground: color.global.color.backgroundColor.value,
        globaltextcolor: color.global.color.globalTextColor.value
    }
}    
console.log(figma.figmacolor.globalbackground)
export default figma