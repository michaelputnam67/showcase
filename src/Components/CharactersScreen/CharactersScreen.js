import Form from "../Form/Form";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import './characters-screen.scss';

export default function CharactersScreen() {
  return (
    <section>
      <h1>Characters</h1>
      <Form />
      <CharacterContainer />
    </section>
  );
}
