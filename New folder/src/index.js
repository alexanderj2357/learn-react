import React from "react";
import ReactDOM from "react-dom";
import Comment from "./components/comment";
import Faker from "faker";
import Approve from "./components/approve";

const App = () => {
  return (
    <div className="ui container comments">
      <Approve>
        <Comment
          author="Alexander"
          timeAgo="Today at 4:45PM"
          textComment="Nice blog post!"
          img={Faker.image.avatar()}
        />
      </Approve>
      <Approve>
        <Comment
          author="Sam"
          timeAgo="Today at 2:00PM"
          textComment="Hey man, well done!"
          img={Faker.image.avatar()}
        />
      </Approve>

      <Approve>
        <Comment
          author="James"
          timeAgo="Yesterday at 5:00PM"
          textComment="You rock!"
          img={Faker.image.avatar()}
        />
      </Approve>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
