import Card from "./Card";
import { CardClass } from "./CardClass";
import user from "./user.json";

const App = () => {
  const { name, age, address, phoneNumber } = user;
  return (
    <div>
      <Card name={name} age={age} address={address} phoneNumber={phoneNumber} />
      <Card
        name="Saurav Verma"
        age={26}
        address="58 Nandanvan, Vrindavan"
        phoneNumber="7351-488-554"
      />
      <CardClass
        name="Tushar Gautam "
        age={26}
        address="Ganeshara, Mathura"
        phoneNumber="7351-488-554"
      />
    </div>
  );
};

export default App;
