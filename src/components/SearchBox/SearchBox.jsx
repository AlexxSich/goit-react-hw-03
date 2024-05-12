import css from './SearchBox.module.css';

export default function SearchBox({ value, onFindContact }) {
  return (
    <div className={css.container}>
      <label htmlFor="findContact">Find contacts by name</label>
      <input
        className={css.searchBoxInput}
        type="text"
        value={value}
        onChange={event => onFindContact(event.target.value)}
        id="findContact"
      />
    </div>
  );
}
