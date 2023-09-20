import './TimeTrackingTable.css';
import data from '../timeTrackingData.json';
 
function TimeTrackingTable() {
    return (
        <div className="TimeTrackingTable">
            <table>
                <tr>
                    <th>Week</th>
                    <th>Team</th>
                    <th>Andreas</th>
                    <th>Dominique</th>
                    <th>Ethan</th>
                    <th>Peter</th>
                    <th>Skyler</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.week}</td>
                            <td>
                                <a href={val.team.filePath}>
                                    <i class="fa fa-file-text-o"></i>
                                    {val.team.fileName}
                                </a>
                            </td>
                            <td>
                                <a href={val.individuals.andreas.filePath}>
                                    <i class="fa fa-file-text-o"></i>
                                    {val.individuals.andreas.fileName}
                                </a>
                            </td>
                            <td>
                                <a href={val.individuals.dominique.filePath}>
                                    <i class="fa fa-file-text-o"></i>  
                                    {val.individuals.dominique.fileName}
                                </a>
                            </td>
                            <td>
                                <a href={val.individuals.ethan.filePath}>
                                    <i class="fa fa-file-text-o"></i>
                                    {val.individuals.ethan.fileName}
                                </a>
                            </td>
                            <td>
                                <a href={val.individuals.peter.filePath}>
                                    <i class="fa fa-file-text-o"></i>
                                    {val.individuals.peter.fileName}
                                </a>
                            </td>
                            <td>
                                <a href={val.individuals.skyler.filePath}>
                                    <i class="fa fa-file-text-o"></i>
                                    {val.individuals.skyler.fileName}
                                </a>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
 
export default TimeTrackingTable;