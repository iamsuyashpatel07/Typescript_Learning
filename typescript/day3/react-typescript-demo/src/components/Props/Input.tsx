// type InputProps = {
//   value: string;
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };

// export const Input = (props: InputProps) => {
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event);
//   };
//   return <input type="text" value={props.value} onChange={handleInputChange} />;
// };

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handleChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" value={value} onChange={handleChange} />;
};
