// Canterbury-style cross (Cross Potent) for Cranmer House branding
// Used in navigation and footer across all pages

export function CanterburyCross({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/*
        Cross Potent — arms that widen into T-bar terminals,
        characteristic of the Canterbury / Anglican tradition.
        24x24 grid: arm width 4, T-bar protrusion 2 on each side.
      */}
      <path d="M8 2H16V5H14V10H19V8H22V16H19V14H14V19H16V22H8V19H10V14H5V16H2V8H5V10H10V5H8Z" />
    </svg>
  )
}
