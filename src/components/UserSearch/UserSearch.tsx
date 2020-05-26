import React, { SFC } from "react";
import { Input } from "semantic-ui-react";
import debounce from "lodash/debounce";

interface UserSearchProps {
  onChange(chars: string): void;
}

export const UserSearch: SFC<UserSearchProps> = (props) => {
  const onChange = debounce(props.onChange, 500);
  return (
    <Input
      placeholder="Search..."
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
