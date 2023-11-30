import PropTypes from 'prop-types';

const AdvertiseRow = ({data,num,handleClick,advertiseLength}) => {
  return (
    <tr>
      <td>{num}</td>
      <td><img src={data?.property?.image} alt="" className='w-20' /></td>
      <th>{data?.property?.title}</th>
      <td>{data?.property?.PriceRange}</td>
      <td>{data?.agent?.name}</td>
      <td className='text-center'>{data?.advertise ? <button onClick={()=>handleClick(data?._id,false)} className='btnStyle !bg-red-500'>Remove</button> : advertiseLength === 6 || <button onClick={()=>handleClick(data?._id,true)} className='btnStyle'>Advertise</button>}</td>
    </tr>
  );
};
AdvertiseRow.propTypes={
data: PropTypes.object,
num: PropTypes.number,
handleClick: PropTypes.func,
advertiseLength: PropTypes.number
}
export default AdvertiseRow;
