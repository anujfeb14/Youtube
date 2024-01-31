import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "News",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Comedy",
    "Coding",
    "Valentines",
    "Javascript",
    "Vlogs",
  ];

  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
