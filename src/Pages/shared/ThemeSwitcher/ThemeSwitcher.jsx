import { Button, Dropdown, DropdownItem, DropdownMenu } from "daisyui";
import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Dropdown>
      <Button>Theme: {theme}</Button>
      <DropdownMenu>
        <DropdownItem onClick={toggleTheme}>Toggle Theme</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeSwitcher;
