type Props = {
  title: string, count: number
}
export default function CartIndicator({ title, count }: Props) {
  return (
    <span className='d-inline-block px-3 py-1 bg-success rounded-pill'>{title}: {count}</span>
  )
}
