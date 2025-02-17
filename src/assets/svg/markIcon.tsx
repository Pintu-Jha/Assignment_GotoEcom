import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

interface CustomStyle {
  size?:number,
  color?:string
  style?: any;
}

const MarkICon:React.FC<CustomStyle> = ({size,color,style}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
  >
    <Path
      d="M26.053 21.496c.002-.371.002-.742.006-1.111.01-1.466-.022-2.93-.029-4.397-.01-1.523-.078-3.042-.122-4.565-.02-.659-.051-1.317-.08-1.977-.031-.681-.12-1.356-.149-2.037-.061-1.437.012-2.873.029-4.31a.858.858 0 0 0-.852-.852c-.085 0-.163.026-.24.05a.786.786 0 0 0-.493-.188c-.732 0-1.46-.071-2.192-.092A42.715 42.715 0 0 0 20.593 2l-1.036.003a92.48 92.48 0 0 0-2.357.039c-.797.02-1.59.061-2.385.106-1.244.073-2.489.077-3.735.1-.448.01-.895.01-1.343.01-.815 0-1.631 0-2.444.059-.231.018-.433.08-.602.249a.845.845 0 0 0-.227.492.8.8 0 0 0-.15.445c.006.901.02 1.8-.002 2.701-.024.911-.028 1.821-.045 2.73-.014.817-.033 1.635-.039 2.451-.008.799-.006 1.598-.022 2.398-.016.817-.022 1.633-.027 2.451-.004.781-.041 1.56-.057 2.342-.018.864-.051 1.725-.065 2.587-.014.797-.053 1.594-.075 2.391-.014.524-.024 1.048-.033 1.572-.008.436.004.87 0 1.305-.012.909.016 1.819-.01 2.728-.013.458.391.841.839.841a.813.813 0 0 0 .303-.063c.266.099.589.058.786-.161.406-.453.813-.905 1.231-1.346.487-.514.975-1.025 1.445-1.555 1.025-1.154 2.082-2.283 3.133-3.415.381-.408.738-.836 1.125-1.24.297-.31.6-.614.901-.92.478.518.967 1.028 1.488 1.506a39.372 39.372 0 0 1 1.69 1.655c.267.277.524.563.795.838.269.275.542.544.809.82.538.555 1.078 1.105 1.608 1.666a17.023 17.023 0 0 0 1.509 1.439c.146.126.292.251.415.4l.006.008a.28.28 0 0 1 .016.02l-.001-.002a.757.757 0 0 0 .396.269c.175.05.36.023.525-.052.095.04.197.063.3.063a.806.806 0 0 0 .799-.799c-.006-.707-.008-1.413-.014-2.12-.008-.752-.033-1.503-.049-2.255a41.24 41.24 0 0 1 .026-2.11c.008-.383.031-.768.033-1.15zm-2.21 5.896c-.491-.457-.938-.962-1.401-1.448a182.487 182.487 0 0 0-3.235-3.348c-.218-.22-.442-.436-.665-.65-.208-.198-.424-.389-.62-.599-.469-.5-.924-1.013-1.372-1.535a.649.649 0 0 0-.291-.189c-.006-.006-.007-.014-.013-.02a.806.806 0 0 0-.571-.233.79.79 0 0 0-.567.233 37.266 37.266 0 0 0-1.755 1.91c-.489.577-.997 1.133-1.5 1.698-1.007 1.136-2 2.289-3.046 3.392-.348.367-.697.732-1.037 1.108-.051.056-.105.11-.156.167 0-.848 0-1.695-.003-2.542-.004-1.555.075-3.109.108-4.662.02-.85.049-1.698.077-2.546.027-.813.035-1.623.049-2.436.029-1.594.043-3.186.029-4.779-.01-1.207.029-2.412.041-3.617.01-1.11.04-2.218.053-3.326a31.324 31.324 0 0 1 1.89-.084c.83-.008 1.659-.033 2.487-.043 1.651-.024 3.295-.177 4.946-.216.807-.02 1.617-.018 2.426-.018.351.002.705.002 1.056 0 .573-.002 1.146-.02 1.719.016.507.033 1.014.06 1.52.084.006.698.018 1.396.026 2.095.008.848.027 1.696.102 2.54.077.84.122 1.68.147 2.524.022.762.061 1.521.084 2.283.022.758.045 1.517.057 2.277.01.736 0 1.47.02 2.206.02.73.014 1.462.008 2.194-.006.767.014 1.531-.022 2.298a39.834 39.834 0 0 0 .008 3.456c.028.608.028 1.217.028 1.825.001.187-.001.373-.003.559-.211-.186-.415-.381-.624-.574zm-.527-6.217c.039.587.088 1.174.124 1.761.026.402-.355.74-.74.74-.422 0-.72-.338-.742-.74-.028-.5-.059-.997-.102-1.496-.065-.712-.08-1.429-.12-2.143-.045-.791-.12-1.58-.161-2.369-.045-.826-.049-1.651-.075-2.477a73.197 73.197 0 0 0-.137-2.608c-.029-.442.393-.811.811-.811.461 0 .785.369.811.811.045.797.065 1.592.069 2.389.004.793-.033 1.584.002 2.375.035.791.104 1.582.151 2.373.042.731.06 1.463.109 2.195z"
      fill={color}
    />
  </Svg>
)
const Memo = memo(MarkICon)
export default Memo
