import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
import { memo } from "react"

    interface CustomeIconProp {
        size:number,
        color:string
    }

const WrongIcon:React.FC<CustomeIconProp> = ({size,color}) => (
  <Svg
    width={24}
    height={24}
    data-name="Layer 1"
    viewBox="0 0 200 200"
  >
    <Path d="M100 15a85 85 0 1 0 85 85 84.93 84.93 0 0 0-85-85Zm0 150a65 65 0 1 1 65-65 64.87 64.87 0 0 1-65 65Z" />
    <Path d="M128.5 74a9.67 9.67 0 0 0-14 0L100 88.5l-14-14a9.9 9.9 0 0 0-14 14l14 14-14 14a9.9 9.9 0 0 0 14 14l14-14 14 14a9.9 9.9 0 0 0 14-14l-14-14 14-14a10.77 10.77 0 0 0 .5-14.5Z" />
  </Svg>
)
const Memo = memo(WrongIcon)
export default Memo
