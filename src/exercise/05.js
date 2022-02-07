// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Exercise
const smallBox = <div className="box box--small" style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{ backgroundColor: 'pink', fontStyle: 'italic' }}>medium pink box</div>
const largeBox = <div className="box box--large" style={{ backgroundColor: 'orange', fontStyle: 'italic' }}>large orange box</div>

//Extra credit 1
// const Box = ({ className = '', style, children }) => (
//   <div className={`box ${className}`} style={{ fontStyle: 'italic', ... style }}>
//     {children}
//   </div>
// )

// Extra credit 2
// const Box = ({ size, style, children }) => {
//   const customSizeClass = size ? `box--${size}` : '';
  
//   return (
//     <div className={`box ${customSizeClass}`} style={{ fontStyle: 'italic', ... style }}>
//       {children}
//     </div>
//   )
// }

function App() {
  return (
    <div>
      {/* Extra credit 2 */}
      {/*
        <Box size="small" style={{backgroundColor: 'lightblue'}}>
          small lightblue box
        </Box>
        <Box size="medium" style={{backgroundColor: 'pink'}}>
          medium pink box
        </Box>
        <Box size="large" style={{backgroundColor: 'orange'}}>
          large orange box
        </Box>
      */}
      {/* Extra credit 1 */}
      {/*
        <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
          small lightblue box
        </Box>
        <Box className="box--medium" style={{backgroundColor: 'pink'}}>
          medium pink box
        </Box>
        <Box className="box--large" style={{backgroundColor: 'orange'}}>
          large orange box
        </Box>
      */}
      {/* Exercise */}
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
