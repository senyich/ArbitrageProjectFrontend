import "./LinkedButton.css"
import { Link } from 'react-router-dom';
export default function LinkedButton({content, path}){
  return (
    <Link className="linked-btn" to={path}>
      {content}
    </Link>
  );
}