import { CardWithIcon, SectionHeader } from "@/components";

type Props = {
  title: string;
  subtitle: string;
  categories: { title: string; icon: JSX.Element }[];
};

const PopularCategories = (props: Props) => {
  return (
    <div className="w-full mt-[15rem] flex flex-col justify-center items-center container mx-auto">
      <SectionHeader title={props.title} subtitle={props.subtitle} />

      <div className="w-full flex flex-row flex-wrap justify-around items-center gap-y-10 mt-20">
        {props.categories.map((category) => (
          <CardWithIcon
            title={category.title}
            icon={category.icon}
            key={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
