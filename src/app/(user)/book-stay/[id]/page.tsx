import {properties} from "@/constant/data";
import {notFound} from "next/navigation";

type Props = {
    params: {
        id: string;
    }
}

const getProperty = (id: string) => {
    return properties.find((property) => property.slug === id);
}
export default function PropertyPage(props: Props): JSX.Element {
    const property = getProperty(props.params.id);

    if (!property) {
        return notFound();
    }

    return (
        <div className={'pt-[9rem]'}>
            <h1>Property : {property?.title}</h1>
        </div>
    );
}
