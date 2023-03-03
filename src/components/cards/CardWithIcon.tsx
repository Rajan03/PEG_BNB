const CardWithIcon = (props: {
  title: string;
  icon: JSX.Element;
  className?: string;
}) => {
  return (
    <>
      <div
        className={
          "flex flex-col justify-center items-center gap-y-9 shadow-custom rounded-lg cursor-pointer " +
          "min-w-[22rem] min-h-[22rem] " +
          props.className
        }
      >
        <div className="w-20 h-20 rounded-full flex justify-center items-center text-primary-600">
          {props.icon}
        </div>
        <h3 className="text-primary-600 text-2xl font-medium tracking-wider">
          {props.title}
        </h3>
      </div>
    </>
  );
};

export default CardWithIcon;
