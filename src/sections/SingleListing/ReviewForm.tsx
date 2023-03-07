import { SectionHeader } from "@/components";

type Props = {
  className?: string;
};

export default function ReviewForm({ className }: Props): JSX.Element {
  return (
    <div
      className={
        "container mx-auto flex flex-col justify-start items-center " +
        className
      }
    >
      <SectionHeader
        title={"Stayed here! Please provide a feedback"}
        subtitle={"Leave a review"}
      />
    </div>
  );
}
