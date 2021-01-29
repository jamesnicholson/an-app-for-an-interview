import './App.scss';
import Posts from './api/Posts';

// NOTE: This line below can be removed. It is just here to show how to use the Posts api.
Posts.getAll({ includeDeleted: false }).then(data => console.log(data));

export default function App() {
  return (
    <div className="App">
      <p>TODO: Posts app</p>
    </div>
  );
}
