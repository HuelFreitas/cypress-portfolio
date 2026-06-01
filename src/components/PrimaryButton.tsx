import React, { useState } from 'react'

type PrimaryButtonProps = {
  label: string
  onClick?: () => void
}

export function PrimaryButton({ label, onClick }: PrimaryButtonProps) {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      data-cy="primary-button"
      onClick={() => {
        setClicked(true)
        onClick?.()
      }}
    >
      {clicked ? `${label} (clicked)` : label}
    </button>
  )
}
