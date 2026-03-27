import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  Navigate 
} from "react-router-dom";

const Home: React.FC = () => <h1>Home Page</h1>;
const About: React.FC = () => <h1>About Page</h1>;

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  
  return <h1>User ID: {userId}</h1>;
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |
        <Link to="/user/123">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Dynamic Route */}
        <Route path="/user/:userId" element={<UserProfile />} />

        {/* 404 - Not Found */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
        
        {/* Redirect Example */}
        <Route path="/old-about" element={<Navigate to="/about" replace />} />
      </Routes>
    </BrowserRouter>
  );
}