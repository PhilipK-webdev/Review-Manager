import React, { createContext, useContext, useState, useEffect } from "react";
const ReviewContext = createContext();
const UpdateReviewContext = createContext();

export function useRevewContext() {
  return [useContext(ReviewContext), useContext(UpdateReviewContext)];
}
function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [charArray, setCharArray] = useState([]);
  const [isIcon, setIsIcon] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      if (response.ok) {
        console.log("data", data);
        {
          setData(data);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <ReviewContext.Provider
      value={{ data, title, description, charArray, isIcon }}
    >
      <UpdateReviewContext.Provider
        value={{ setData, setTitle, setDescription, setCharArray, setIsIcon }}
      >
        {children}
      </UpdateReviewContext.Provider>
    </ReviewContext.Provider>
  );
}

export default UserProvider;
