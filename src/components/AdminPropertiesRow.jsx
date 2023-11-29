import PropTypes from 'prop-types';

const AdminPropertiesRow = ({data,num,handleClick}) => {
  return (
    <tr>
      <td>{num}</td>
      <th>{data?.property?.title}</th>
      <td>{data?.property?.location}</td>
      <td>{data?.agent?.name}</td>
      <td>{data?.agent?.email}</td>
      <td>{data?.property?.PriceRange}</td>
      {
        data?.status === "pending" ? <>
        <td>
        <button onClick={()=>handleClick(data._id,'verified')} className='btnStyle'>verify</button>
      </td>
      <td><button onClick={()=>handleClick(data._id,'rejected')} className='btnStyle !bg-red-500'>reject</button></td>
        </> : <td><div
            className={`badge ${
              data?.status === "verified"
                ? "bg-[#1F8A70]"
                : "bg-red-500"
            } text-[#D7FBE8]`}
          >
            {data?.status}
          </div></td>
      }
      
    </tr>
  );
};
AdminPropertiesRow.propTypes={
data: PropTypes.object,
num: PropTypes.number,
handleClick: PropTypes.func
}
export default AdminPropertiesRow;
