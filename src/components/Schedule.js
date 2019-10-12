import React from 'react'

const Schedule = () => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th><abbr title="Position">#</abbr></th>
          <th>Match</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th><abbr title="Position"></abbr></th>
          <th></th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <th>1</th>
          <td>6/5 @ Evergreens</td>
        </tr>
        <tr>
          <th>2</th>
          <td>6/8 vs Kickers</td>
        </tr>
        <tr>
          <th>3</th>
          <td>6/14 @ United</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Schedule
