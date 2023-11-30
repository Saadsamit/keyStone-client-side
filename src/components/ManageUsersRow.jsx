import PropTypes from "prop-types";
const ManageUsersRow = ({ data, num, email,handleClick,handleDelete }) => {
  //  admin ● agent ● client ● Mark as fraud ● Delete user
  return (
    <tr>
      <th>{num}</th>
      <td>
        {data?.name} {email === data?.email && <div className="badge">me</div>}
      </td>
      <td>{data?.email}</td>
      <td>
        <select onChange={e=>handleClick(e.target.value,data?.email)} defaultValue={data?.role} className="select select-accent capitalize text-[#1F8A70] w-full max-w-xs ">
          <option className="bg-[#D7FBE8]" value='client'>client</option>
          <option className="bg-[#D7FBE8]" value='agent'>agent</option>
          <option className="bg-[#D7FBE8]" value='admin'>admin</option>
          <option className="bg-[#D7FBE8]" value='fraud'>fraud</option>
        </select>
      </td>
      <td>
        <button onClick={()=>handleDelete(data?._id)} className="btnStyle !bg-red-500">delete user</button>
      </td>
    </tr>
  );
};
ManageUsersRow.propTypes = {
  data: PropTypes.object,
  num: PropTypes.number,
  email: PropTypes.string,
  handleClick:PropTypes.func,
  handleDelete: PropTypes.func
};
export default ManageUsersRow;
