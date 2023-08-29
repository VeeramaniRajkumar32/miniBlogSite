import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogHome } from "./Blogs/BlogHome";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState([])
  useEffect(() => {
	  const user = localStorage.getItem("user");
	 
	if (!user) {
	  navigate("/login");
	}else{
		setUser(user)
	}
  }, [user]);

  return (
	<>
	  <div className="container">
		<div className="row">
		  <div className="col-12">
			<BlogHome user={user} />
		  </div>
		</div>
	  </div>
	</>
  );
}

export default Dashboard;
