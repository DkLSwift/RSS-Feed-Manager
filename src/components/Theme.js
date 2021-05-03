import React, { useState } from "react";
import { ThemeProvider } from "styled-components";



// const theme = {
//     colors: {
//         dephtsOfWater: {
//             stPatrickBlue: 'rgb(22, 31, 111)',
//             stPatrickTintOne: '#A2A5C5',
//             stPatrickTintTwo:'#B9BCD4',
//             stPatrickTintThree:'#D0D2E2',
//             stPatrickTintFour:'#E8E9F1',
//             denimBlue: 'rgb(33, 64, 163)',
//             hanBLue: 'rgb(54, 105, 213)',
//             bleuDeFrance: 'rgb(36, 136, 213)',
//             pacificBlue: 'rgb(26, 169, 208)',
//         }, 
//         blueberry: {
//             spaceCadet: 'rgb(31, 48, 80)',
//             americanBlue: 'rgb(42, 65, 111)',
//             queenBlue: 'rgb(73, 104, 152)',
//             darkPastelBlue: 'rgb(117, 152, 200)',
//         },
//         darkOrange: {
//             secondary: 'rgb(1, 0, 19)',
//             secondaryAlt: '#1A1A2B',
//             secondaryAlt2: '#0E0D1E',
//             tertiaryAlt: 'rgb(18, 21, 76)',
//             stPatrickBlue: 'rgb(22, 31, 111)',
//             tertiary: 'rgb(24, 135, 199)',
//             primaryAlt: 'rgb(255, 119, 4)',
//             primary: 'rgb(246, 83, 15)',
//         }
        // darkOrange: {
        //     richBlack: 'rgb(1, 0, 19)',
        //     richBlackTint: '#1A1A2B',
        //     richBlackTone: '#0E0D1E',
        //     cetaceanBlue: 'rgb(18, 21, 76)',
        //     stPatrickBlue: 'rgb(22, 31, 111)',
        //     cyanCornflowerBlue: 'rgb(24, 135, 199)',
        //     heatWave: 'rgb(255, 119, 4)',
        //     oriolesOrange: 'rgb(246, 83, 15)',
        // }
//     }
// }

// const Theme = ({ themeColors, setThemeColors, children }) => {

//     setThemeColors(theme.colors.darkOrange)

//     return (
//         <ThemeProvider theme={themeColors}>{children}</ThemeProvider>
//     );
// } 

// export default Theme;



export const thin = {
    primary: 'rgb(26, 169, 208)',
    primaryAlt: 'rgb(36, 136, 213)',
    secondary: 'rgb(22, 31, 111)',
    secondaryAlt2: 'rgb(33, 64, 163)',
    secondaryAlt: 'rgb(54, 105, 213)',
    tertiary:'#B9BCD4',
    tertiaryAlt:'#D0D2E2',

}
export const blueberry = {
    primary: 'rgb(117, 152, 200)',
    primaryAlt: 'rgb(73, 104, 152)',
    secondary: 'rgb(31, 48, 80)',
    secondaryAlt: 'rgb(42, 65, 111)',
    // secondaryAlt2: '#0E0D1E',
    secondaryAlt2: 'rgb(25, 38, 64)',
    tertiary: 'rgb(24, 135, 199)',
    tertiaryAlt: 'rgb(18, 21, 76)',
}

// Chaker idea
// export const darkOrangeColors = {
    
//     primary: '#F6530F',
//     primaryAlt: '#CA4108',
//     secondary: '#0FF653',
//     secondaryAlt: '#1A1A2B',
//     secondaryAlt2: '#0E0D1E',
//     tertiary: '#530FF6',
//     tertiaryAlt: '#490DD7',
// }
//  MEIN
export const darkOrangeColors = {
    
    primary: 'rgb(246, 83, 15)',
    primaryAlt: 'rgb(255, 119, 4)',
    secondary: 'rgb(1, 0, 19)',
    secondaryAlt: '#1A1A2B',
    secondaryAlt2: '#0E0D1E',
    tertiary: 'rgb(24, 135, 199)',
    tertiaryAlt: 'rgb(18, 21, 76)',

    stPatrickBlue: 'rgb(22, 31, 111)',
}

export const dephtsOfWater = {
    primary: 'rgb(144, 224, 239)',
    primaryAlt: 'rgb(72, 202, 228)',
    secondary: 'rgb(3, 4, 94)',
    secondaryAlt: '#020550',
    // 'rgb(2, 62, 138)',
    secondaryAlt2: '#010228',
    // 'rgb(0, 119, 182)',
    tertiary:'rgb(0, 150, 199)',
    tertiaryAlt:'rgb(0, 180, 216)',
}