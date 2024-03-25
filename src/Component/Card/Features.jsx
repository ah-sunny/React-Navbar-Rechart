import { GiCheckMark } from "react-icons/gi";

const Features = ({featureOption}) => {
    return (
        <ul className="flex gap-3 items-center ">
            <GiCheckMark></GiCheckMark>
            <li>{featureOption}</li>
        </ul>
    );
};

export default Features;