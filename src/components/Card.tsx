
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>card</p>
      <div>{children}</div>
    </div>
  )
}

export default Card