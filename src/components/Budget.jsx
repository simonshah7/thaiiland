import { BUDGET } from '../data';

export default function Budget() {
  return (
    <section id="budget" className="reveal">
      <h2>
        <span className="icon">&#128176;</span> Budget Summary
      </h2>
      <div className="card-wrap">
        <table className="budget-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Detail</th>
              <th>Est. Cost</th>
            </tr>
          </thead>
          <tbody>
            {BUDGET.map((b) => (
              <tr key={b.cat}>
                <td>
                  <strong>{b.cat}</strong>
                </td>
                <td>{b.detail}</td>
                <td>{b.cost}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={2} className="budget-total">
                Estimated Total (per couple)
              </td>
              <td className="budget-total">~&#3647;100,000 (~$2,800 USD)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
