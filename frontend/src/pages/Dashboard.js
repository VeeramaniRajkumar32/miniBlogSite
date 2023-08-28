import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Blogs/Header";
import { BlogHome } from "./Blogs/BlogHome";

function Dashboard() {
  const navigate = useNavigate();
  // const user = ""

  // To retrieve data
  const user = localStorage.getItem("user");
  useEffect(() => {
	if (!user) {
	  navigate("/login");
	}
  }, [user]);

  return (
	<>
	  <div className="container">
		<div className="row">
		  <div className="col-3">
			<Header />
		  </div>
		  <div className="col-9">
			<BlogHome />
		  </div>
		</div>
	  </div>
	</>
  );
}

export default Dashboard;
