//NPM files
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="admin">
      <h1>Netflix Admin Interface</h1>
      <h2>Choose a category to edit its content</h2>
      <Link to="/admin/films">Films</Link>
      <Link to="/admin/series">Series</Link>
      <Link to="/admin/documentaries">Documentaries</Link>
      <Link to="/admin/top-ten">Top ten in Sweden Today</Link>
    </div>
  );
}
