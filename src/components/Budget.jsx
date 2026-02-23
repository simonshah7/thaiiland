import { BUDGET } from '../data';

export default function Budget() {
  return (
    <section id="budget" className="reveal">
      <h2>
        <span className="icon">&#128176;</span> Booking Summary
      </h2>
      <div className="card-wrap">
        <table className="budget-table">
          <thead>
            <tr>
              <th>Booking</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {BUDGET.map((b) => (
              <tr key={b.cat}>
                <td>
                  <strong>{b.cat}</strong>
                </td>
                <td>{b.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
