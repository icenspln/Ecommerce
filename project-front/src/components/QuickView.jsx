import { Link } from 'react-router-dom';

export default function QuickView({ link }) {
    // const navigate = useNavigate();

  return (
    // <a href={link}>
    //   <div className="bg-redish text-white px-2 py-1 mx-auto m-4 w-fit ">
    //     Quick view
    //   </div>
    // </a>

    // <button className="bg-redish text-white px-2 py-1 mx-auto m-4 w-fit" onClick={ navigate('/detail')
    // }>

    // </button>


<Link  to={{
    pathname: `/detail/${link}`,
    // state: { users: user }
  }} className="bg-redish text-white px-2 py-1 mx-auto m-4 w-fit">Quick view</Link>

  );
}
