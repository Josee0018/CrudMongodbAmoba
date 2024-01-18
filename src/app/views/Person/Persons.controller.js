import PrivatePageContainer from "../../components/PrivatePageContainer";
import { usePersonsHook } from "./Persons.hook";
import PersonsView from "./Persons.view";

function Persons(props) {
  const hookData = usePersonsHook(props);
  return (
    <PrivatePageContainer children={<PersonsView {...props} {...hookData} />} />
  );
}

export default Persons;
