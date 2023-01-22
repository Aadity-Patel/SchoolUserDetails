import React from 'react'
import Button from "@mui/material/Button";


export default function UserButton({ buttonText, onClick }) {
  return (
    <div className="p-2">
      <Button
        className="button"
        data-testid={buttonText}
        onClick={onClick}
        variant="contained"
        size="medium"
      >
        {buttonText}
      </Button>
    </div>
  )
}
