import { CursorProps, useCursorify } from '@cursorify/react'
import React from 'react'
import Default from './svgs/Default'
import Pointer from './svgs/Pointer'
import Text from './svgs/Text'

export const PhingerCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { hoverState } = useCursorify()

  const margin = disabled ? 24 : hoverState === 'default' ? 24 : 12
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
        if (hoverState === 'pointer') return <Pointer />
        if (hoverState === 'text') return <Text />
        return <Default />
      })()}
    </div>
  )
}
