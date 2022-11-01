import React, { useEffect} from "react";
import { useDispatch , useSelector } from "react-redux"
import { getFeeds } from "../redux/feed/feed.action";

const Feeds = () => {
  const feeds=useSelector(store=>store.feed.feeds)
  const dispatch=useDispatch()

  useEffect(() => {
   dispatch(getFeeds())
  }, []);
  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((feed) => (
        <ul key={feed.id}>
          <li>{feed.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
