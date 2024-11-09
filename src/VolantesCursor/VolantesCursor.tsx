import { CursorProps, useCursorify } from '@cursorify/react'
import React from 'react'
import Default from './svgs/Default'
import Pointer from './svgs/Pointer'
import Text from './svgs/Text'

export const VolantesCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { style } = useCursorify()

  const margin = disabled ? 24 : style === 'default' ? 24 : 12
  return (
    <div
      style={{
        width: 24,
        height: 24,
        marginTop: margin,
        marginLeft: margin,
      }}
    >
      {(() => {
        if (disabled) return <Default />
        if (style === 'pointer') return <Pointer />
        if (style === 'text') return <Text />
        return <Default />
      })()}
    </div>
  )
}