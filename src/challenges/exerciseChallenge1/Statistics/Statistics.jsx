import { StaticsLine } from "./StaticsLine";

export const Statistics = ({good, neutral, bad, total, average, happyPercentage}) => {
    return(
        <div className="content">
        {total !== 0 ? (
        <table>
            <tbody>
              <tr>
                <td><StaticsLine text={"good:"} value={good} /></td>
              </tr>
              <tr>
                <td><StaticsLine text={"neutral:"} value={neutral} /></td>
              </tr>
              <tr>
                <td><StaticsLine text={"bad:"} value={bad} /></td>
              </tr>
              <tr>
                <td><StaticsLine text={"total:"} value={total} /></td>
              </tr>
              <tr>
                <td><StaticsLine text={"average:"} value={average} /></td>
              </tr>
              <tr>
                <td><StaticsLine text={"positive:"} value={`${happyPercentage}%`} /></td>
              </tr>
            </tbody>
          </table>) :<StaticsLine text="No feedbacks given" />}
        </div>
    )
}