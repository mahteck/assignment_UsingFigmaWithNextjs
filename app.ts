import { useState } from "react";

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};