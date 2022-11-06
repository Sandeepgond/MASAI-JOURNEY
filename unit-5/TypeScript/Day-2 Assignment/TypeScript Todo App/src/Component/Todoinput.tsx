import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoInputProps = {
    onAdd: Function
};
const TodoInput = (props: TodoInputProps) => {
    const { onAdd } = props;
    const [value, setValue] = useState<string>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handleSubmitEvent = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(value.length > 0) {
          onAdd(value);
          setValue("");
        }
    }
  return (
    <div>
    <form onSubmit={handleSubmitEvent}>
      <input 
        type='text'
        placeholder='add something'
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
    </div>
  );
}

export default TodoInput;