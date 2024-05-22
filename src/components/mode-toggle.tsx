import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

type ModeToggleProps = {
    className?: string;
};

export default function ModeToggle({ className }: ModeToggleProps): JSX.Element {
    const { theme, setTheme } = useTheme();
    function handleClick() {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
    return (
        <button onClick={handleClick} title="Toggle Dark/Light mode" className={className}>
            {theme === "dark" ? (
                <Sun size={28} strokeWidth={1.75} />
            ) : (
                <Moon size={28} strokeWidth={1.75} />
            )}
        </button>
    );
}
