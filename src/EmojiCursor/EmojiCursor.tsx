import { CursorProps, useCursorify } from '@cursorify/react'
import React from 'react'

export const EmojiCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { mouseState, hoverState } = useCursorify()

  return (
    <div
      data-hover={hoverState}
      style={{
        width: 40,
        height: 40,
        fontSize: 30,
      }}
    >
      {(() => {
        if (disabled) return '🖐️'
        if (mouseState === 'mouseDown') return '✊'
        if (hoverState === 'pointer') return '👆'
        return '🖐️'
      })()}
    </div>
  )
}
