import Comments from "./Comments";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Anuj",
    text: "Lorem Ipsum",
    replies: [],
  },
  {
    name: "Anuj",
    text: "Lorem Ipsum",
    replies: [
      {
        name: "Anuj",
        text: "Lorem Ipsum",
        replies: [],
      },
      {
        name: "Anuj",
        text: "Lorem Ipsum",
        replies: [
          {
            name: "Anuj",
            text: "Lorem Ipsum",
            replies: [
              {
                name: "Anuj",
                text: "Lorem Ipsum",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Anuj",
    text: "Lorem Ipsum",
    replies: [],
  },
  {
    name: "Anuj",
    text: "Lorem Ipsum",
    replies: [],
  },
  {
    name: "Anuj",
    text: "Lorem Ipsum",
    replies: [],
  },
];

const CommentContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
