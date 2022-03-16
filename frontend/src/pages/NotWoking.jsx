import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NotWoking = () => {

    const navigate = useNavigate()

  const fetchData = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:4000/api");
      if(response) navigate('/') 
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(async () => {
    fetchData();
  }, []);

  return <div>NotWoking</div>;
};

export default NotWoking;
