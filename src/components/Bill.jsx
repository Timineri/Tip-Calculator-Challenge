export default function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="text" value={bill} onChange={onBill} />
    </div>
  );
}
