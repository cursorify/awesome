import { CursorProps, useCursorify } from '@cursorify/react'
import React from 'react'

export const EmojiCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { mouseState, style } = useCursorify()

  return (
    <div
      data-hover={style}
      style={{
        width: 40,
        height: 40,
        fontSize: 30,
      }}
    >
      {(() => {
        if (disabled) return '🖐️'
        if (mouseState === 'mouseDown') return '✊'
        if (style === 'pointer') return '👆'
        return '🖐️'
      })()}
    </div>
  )
}
