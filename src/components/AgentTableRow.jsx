import PropTypes from 'prop-types';
const AgentTableRow = ({data,num}) => {
  return (
    <tr>
      <th>{num}</th>
      <td>{data?.property?.title}</td>
      <td>{data?.property?.location}</td>
      <td>{data?.userEmail}</td>
      <td>{data?.userName}</td>
      <td>${data?.offerAmount}</td>
    </tr>
  );
};
AgentTableRow.propTypes = {
    data: PropTypes.object,
    num: PropTypes.number
  };
export default AgentTableRow;
