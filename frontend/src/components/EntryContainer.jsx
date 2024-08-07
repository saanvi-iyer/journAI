
const EntryContainer = (props) => {
  return (
    <div className="z-[25] m-4 flex  min-h-fit w-[25vw] rounded-lg bg-white px-4 py-4 ">
      <div className="items-left flex min-h-fit flex-col gap-y-3">
        <span className=" text-3xl text-deep-blue">{props.title}</span>
        <p className="pl-1 text-dark-grey">{props.date}</p>
      </div>
    </div>
  );
};

export default EntryContainer;
